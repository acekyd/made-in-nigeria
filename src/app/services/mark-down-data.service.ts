import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {IRepository} from '../interfaces/irepository';
import {GithubUsernamePipe} from '../pipes/github-username.pipe';

declare var markdownit;


@Injectable()
export class MarkDownDataService {
  data: Observable<IRepository[]>;

  private _md;

  constructor(private _http: Http, private _githubUsername: GithubUsernamePipe) {
    console.log('am in, should see this once #singleton');
    this._md = markdownit({
      html: true,
      linkify: true,
      typographer: true
    });

    this.data = this._parseMarkDown();
  }

  /**
   * following pattern from initial version done by
   * @link http://twitter.com/macbhee_
   *
   * just parse our markdown here to html element
   *
   */
  private _parseMarkDown(): Observable<IRepository[]> {
    return this._http
      .get('https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD')
      .map(data => data.text())
      .mergeMap((mdContent: string) => {

        // Convert markdown file content to html string.
        const htmlStrData: string = this._md.render(mdContent);

        /**
         * let's create a dom here to hold our html record
         * so we don't need to add hide or display none, since we
         * haven't append it to our body yet
         */
        const html: HTMLElement = document.createElement('div');
        html.innerHTML = htmlStrData;

        return this._prepareData(<NodeListOf<HTMLLIElement>> html.querySelectorAll('ul >li'));
      });
  }


  /**
   * now we can manipulate our list of naija folks (Am with the force and the force is with me) to be a normal
   * interface
   *
   * @param list
   */
  private _prepareData(list: NodeListOf<HTMLLIElement>): Observable<IRepository[]> {


    const record: IRepository[] = [];

    for (let i = 0; i < list.length; i++) {
      const li: HTMLLIElement = list[i];
      let nameAnchor: any = <HTMLAnchorElement>li.querySelector('a:first-child');
      let creatorAnchor: any = <HTMLAnchorElement>li.querySelector('strong > a');


      /**
       *   in case creatorAnchor or nameAnchor is empty or null do this
       *   for our niggas that missed the pattern of <a>repo name</a> - description - <a>creator</a>
       */
      nameAnchor = nameAnchor || {text: '', href: ''};
      creatorAnchor = creatorAnchor || {text: '', href: ''};


      const item: IRepository = {
        name: {name: nameAnchor.text, link: nameAnchor.href},
        description: this._getDiscription(li),
        creator: {name: creatorAnchor.text, link: creatorAnchor.href}
      };

      record.push(item);
    }

    return Observable.of(record);
  }

  /**
   * this is used to get our description from our mark down
   * description entered by devs directly
   * @param li
   */
  private _getDiscription(li: HTMLLIElement): string {
    li.removeChild(li.lastChild); // remove the creator we don't need it here
    const text = li.innerText;
    // not nice to use regexp for such a simple task
    return text.substring(text.lastIndexOf('-') + 1).trim();
  }

  /**
   *  this is used to get the languages used by each repo
   *  sort by the highest number of code lines
   * @param repo
   * @returns {Observable<R>}
   */
  getLanguages(repo: IRepository): Observable<[{key: string, value: number}]> {
    return this._http.get(`https://api.github.com/repos/${this._githubUsername.transform(repo.name.link)}/${repo.name.name.toLowerCase().split(' ').join('-')}/languages`)
      .map(res => {
        const obj: any = res.json();

        // convert to array of key and value pair instead of object
        return Object.keys(obj).map((key) => {
          if (key === 'CSS') {
            key = 'CSS3';
          } else if (key === 'HTML') {
            key = 'HTML5';
          }

          return {key: key, value: obj[key]}
        });
      })
      .map((languages: [{key: string, value: number}]) => {
        return languages.sort((a, b) => (b.value - a.value));
      });
  }


}
