import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClarityModule} from 'clarity-angular';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RepositoryComponent} from './repository/repository.component';
import {SearchService} from "./services/search.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
