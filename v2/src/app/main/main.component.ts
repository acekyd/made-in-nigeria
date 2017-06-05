import {Component, OnInit} from '@angular/core';
import {IRepository} from "../interfaces/irepository";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //hold up all our naija repos
  repositories: IRepository[] = [];

  constructor() {
    this.repositories = this.testData();
  }

  ngOnInit() {
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
