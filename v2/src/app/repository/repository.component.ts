import {Component, OnInit, Input} from '@angular/core';
import {IRepository} from "../interfaces/irepository";

@Component({
  selector: 'repository',
  template: `<div class="naija-card">
    <div class="naija-header">
        <img src="https://avatars0.githubusercontent.com/u/10440327?v=3">
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
        <a *ngFor="let stack of repo.stacks" style="text-decoration: none"
           href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
            <img class="stack-icon" src="assets/{{stack}}.svg"
                 alt="js"></a>
    </div>
</div><!--/naija-card-->
`,
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repo: IRepository;

  constructor() {
  }

  ngOnInit() {
  }

}
