import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'githubUsername'
})
export class GithubUsernamePipe implements PipeTransform {

  /**
   * we want to get the github username from the repo link we do this procedure
   * test case http[s]://github.com/theo4u/repo_name
   * 1. remove from .com then -> remaining /theo4u/repo_name
   * 2. split it with '/' then -> get the array of ['','theo4u','repo_name']
   * 3. return index 1
   * @param value
   * @param args
   * @returns {null}
   */
  transform(value: any, args?: any): any {
    value = value.substr(value.indexOf(".com"));
    value =  value.split('/');

    return value[1];
  }

}
