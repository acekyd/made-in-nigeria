import {Component, OnInit, OnDestroy} from '@angular/core';
import {IRepository} from "../interfaces/irepository";
import {SearchService} from "../services/search.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  //hold up all our naija repos
  repositories: IRepository[] = [];

  /**
   * this our subscription is here to help listen for our search input on our header, so we can filter our
   * repos
   */
  private _searchSubscription: Subscription;


  constructor(private _searchService: SearchService) {
    this.repositories = this.testData();

    //let's subscribe to our search source, so we listen for any changes and inturn filter our view based on the term
    this._searchSubscription = this._searchService.getSource().subscribe((term: string)=> {
      console.log("Your typed", term);
    });
  }


  ngOnDestroy() {
    this._searchSubscription.unsubscribe();//unsubscribe from our subscription , memory leak
  }

  testData(): IRepository[] {

    let repos: IRepository[] = [];
    for (let i = 0; i < 20; i++) {

      repos.push({
        name: 'Testing Repo' + i,
        creator: 'theo4me',
        description: '  description here not too plenty just end with description here not too plenty just end with ...',
        stacks: ['js', 'expressjs', 'css', 'gulpjs', 'html', 'jasmine', 'jshint', 'markup', 'karmarunner']
      });
    }

    return repos;
  }

}
