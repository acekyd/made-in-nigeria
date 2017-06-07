import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

declare var markdownit;

interface IRepository {
  name: {name: string, link: string};
  description: string;
  creator: {name: string, link: string};
  stacks?: Array<Observable<string>>
}

@Injectable()
export class MarkDownDataService {
  private data: Observable<IRepository>;

  private _md;

  constructor(private _http: Http) {
    console.log("am in, should see this once #singleton");
    this._md = markdownit({
      html: true,
      linkify: true,
      typographer: true
    });

    this.parseMarkDown();
  }

  /**
   * following pattern from initial version done by
   * @link http://twitter.com/macbhee_
   *
   * just parse our markdown here to html element
   *
   */
  parseMarkDown() {
    this._http
      .get('https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD')
      .map(data=>data.text())
      .do((mdContent: string)=> {

        // Convert markdown file content to html string.
        let htmlStrData: string = this._md.render(mdContent);

        /**
         * let's create a dom here to hold our html record
         * so we don't need to add hide or display none, since we
         * haven't append it to our body yet
         */
        let html: HTMLElement = document.createElement('div');
        html.innerHTML = htmlStrData;

        this.prepareData(<NodeListOf<HTMLLIElement>> html.querySelectorAll('ul >li'));
      }).subscribe();
  }


  /**
   * now we can manipulate our list of naija folks (Am with the force and the force is with me) to be a normal
   * interface
   *
   * @param list
   */
  prepareData(list: NodeListOf<HTMLLIElement>) {


    let record: IRepository[] = [];

    for (let i = 0; i < list.length; i++) {
      let li: HTMLLIElement = list[i];
      let nameAnchor:any = <HTMLAnchorElement>li.querySelector('a:first-child');
      let creatorAnchor:any = <HTMLAnchorElement>li.querySelector('strong > a');

      //in case creatorAnchor or nameAnchor is empty or null do this
      nameAnchor = nameAnchor || {text: '', href: ''};
      creatorAnchor = creatorAnchor || {text: '', href: ''};

      let item: IRepository = {
        name: {name: nameAnchor.text, link: nameAnchor.href},
        description: this.getDiscription(li.innerText),
        creator: {name: creatorAnchor.text, link: creatorAnchor.href}
      };

      
      console.log(item);


      record.push(item);
    }


  }

  /**
   * this is used to get our description from our mark down
   * description entered by devs directly
   * @param text
   */
  getDiscription(text: string): string {
    //not nice to use regexp for such a simple task
    return text.substring(text.lastIndexOf('-') + 1).trim();
  }

}
