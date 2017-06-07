import {Component} from '@angular/core';
import {SearchService} from "./services/search.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showInfo: boolean = true;

  constructor(private _searchService: SearchService) {
  }

  /**
   * handle our search term on key up from our search input
   * from here our other components can subscribe for the changes
   * @param event
   */
  search(event) {
    this._searchService.search(event.target.value);
  }

}
