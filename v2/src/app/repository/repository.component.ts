import {Component, OnInit, Input} from '@angular/core';
import {IRepository} from "../interfaces/irepository";
import {MarkDownDataService} from "../services/mark-down-data.service";
import {error} from "util";

@Component({
  selector: 'repository',
  template: `<div class="naija-card">
    <div class="naija-header">
        <img src="https://avatars.githubusercontent.com/{{repo.name.link | githubUsername}}?size=40">
        <a [href]="repo.name.link" target="_blank">{{repo.name.name}}</a>

        <a [href]="repo.creator.link" target="_blank" role="tooltip" aria-haspopup="true"
           class="tooltip tooltip-sm tooltip-left pull-right"
           style="font-size:12px">
            <clr-icon shape="user"></clr-icon>
            {{repo.creator.name | slice:1}} <!-- this is just to remove @ from the creator not all from twitter -->
            <span class="tooltip-content">Creator</span>
        </a>

        <p>
            {{repo.description}}
        </p>
    </div>
    <div class="naija-card-footer">
    <!--show button when we have not loaded the languages-->
    <button *ngIf="!repo.stacks" class="btn btn-success-outline btn-sm" (click)="loadLanguage(repo)"  [clrLoading]="repo.loader">Load Language(s)</button>
       
        <div style="padding-top: 6px;">
        <a *ngFor="let stack of repo.stacks" style="text-decoration: none"
           href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
           <i class="stack-icon devicon-{{stack.key | lowercase}}-plain colored"></i>
            <!--<img class="stack-icon" src="https://codetrace.io/static/images/groups/{{stack.key | lowercase}}.svg" alt="js">-->
            </a>
            </div>
    </div>
</div><!--/naija-card-->
`,
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repo: IRepository;

  constructor(private _mdDataService: MarkDownDataService) {
  }

  ngOnInit() {
  }

  /**
   * this is used to load each repo language
   * @param repo
   */
  loadLanguage(repo): void {
    if (repo.loader) //if loading before don't reload again
      return;


    repo.loader = true;

    this._mdDataService.getLanguages(repo)
      .subscribe((languages)=> {
        repo.loader = false;
        repo.stacks = languages;
      }, (error)=> {
        repo.loader = false;
        console.error(error);
      });

  }


}
