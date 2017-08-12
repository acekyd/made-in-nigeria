import {Component, OnInit, OnDestroy} from '@angular/core';
import {IRepository} from '../interfaces/irepository';
import {SearchService} from '../services/search.service';
import {Subscription, Observable} from 'rxjs';
import {MarkDownDataService} from '../services/mark-down-data.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  // hold up all our naija repos
  repositories: Observable<IRepository[]>;
  searchTerm: string;

  /**
   * this our subscription is here to help listen for our search input on our header, so we can filter our
   * repos
   */
  private _searchSubscription: Subscription;


  constructor(private _searchService: SearchService, private _mdService: MarkDownDataService) {

    // let's get our observable of record here #repos
    this.repositories = this._mdService.data;

    /**
     * let's subscribe to our search source, so we listen for any changes
     * and in turn filter our view based on the term.
     * we don't waste time to always filter our list
     */
    this._searchSubscription = this._searchService.getSource()
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((term: string) => {
        this.searchTerm = term;
      });
  }


  ngOnDestroy() {
    this._searchSubscription.unsubscribe(); // unsubscribe from our subscription , memory leak
  }

}
