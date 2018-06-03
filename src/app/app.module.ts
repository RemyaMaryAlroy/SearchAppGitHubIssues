import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchService } from './search.service';
import { Injectable, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IssuedetailsComponent } from './issuedetails/issuedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    IssuedetailsComponent
  ],
  imports: [
    AppRoutingModule,
	BrowserModule,
	HttpClientModule,
	HttpModule,
	FormsModule,
	NgxPaginationModule,
	NgxSpinnerModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }