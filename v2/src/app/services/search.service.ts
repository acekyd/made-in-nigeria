import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

/**
 * this class service is here in order for us to do Parent and children communication
 *
 * @link https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service
 */

@Injectable()
export class SearchService {

// Observable string source
  private _searchSource = new Subject<string>();

  constructor() {
  }

  /**
   * this is used to pass our searched terms to our search source observable
   * @param term
   */
  search(term: string): void {
    this._searchSource.next(term);
  }

  /**
   * return our subject to us, so we can subscribe
   * @returns {Subject<string>}
   */
  getSource(): Subject<string> {
    return this._searchSource;
  }

}
