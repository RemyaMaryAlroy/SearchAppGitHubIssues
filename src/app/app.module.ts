import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchService } from './search.service';
import { Injectable, Injector } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
	 
  ],
  imports: [
    AppRoutingModule,
	BrowserModule,
	  HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }