import {Pipe, PipeTransform} from '@angular/core';
import {IRepository} from "../interfaces/irepository";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  /**
   * this pipe just simply checks for our
   * creator.name , name.name (repo name) , and within the description
   * @param items
   * @param value
   * @returns {any}
   */
  transform(items: IRepository[], value: string): any[] {
    if (!items) return [];

    if (value == null || value.trim() == "") {
      return items;
    }

    return items.filter(it => {

      //let's check if our value or search can be splitted with whitespace
      let splitted_item = value.toLowerCase().split(" ");

      let seen = false;
      for (let word of splitted_item) {
        if (word == "") {
          continue;
        }
        if (it.name.name.toLowerCase().indexOf(word) > -1 || it.creator.name.toLowerCase().indexOf(word) > -1 || it.description.toLowerCase().indexOf(word) > -1)
          seen = true;
      }

      return seen;
    });
  }

}
