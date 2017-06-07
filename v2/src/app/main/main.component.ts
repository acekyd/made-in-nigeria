import {Component, OnInit, OnDestroy} from '@angular/core';
import {IRepository} from "../interfaces/irepository";
import {SearchService} from "../services/search.service";
import {Subscription, Observable} from "rxjs";
import {MarkDownDataService} from "../services/mark-down-data.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  //hold up all our naija repos
  repositories: Observable<IRepository[]>;

  /**
   * this our subscription is here to help listen for our search input on our header, so we can filter our
   * repos
   */
  private _searchSubscription: Subscription;


  constructor(private _searchService: SearchService, private _mdService: MarkDownDataService) {

    this.repositories = this._mdService.data;

    //let's subscribe to our search source, so we listen for any changes and inturn filter our view based on the term
    this._searchSubscription = this._searchService.getSource().subscribe((term: string)=> {
      console.log("Your typed", term);
    });
  }


  ngOnDestroy() {
    this._searchSubscription.unsubscribe();//unsubscribe from our subscription , memory leak
  }

}
