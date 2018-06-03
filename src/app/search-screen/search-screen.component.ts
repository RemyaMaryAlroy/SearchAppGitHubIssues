import { Component, OnInit,Injectable, Injector } from '@angular/core';
import {SearchService} from '../search.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
 
 

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

searchCoulmnHeadings: any[]=[
{"key":"Issue ID", "value":"Issue ID"},
{"key" : "Issue Number", "value":"Issue Number"},
{"key" : "Issue Title", "value": "Issue Title"},
{"key":"Creation Date","value":"Creation Date"}
];
data: any[] =[];
  constructor( private searchservice: SearchService,
    private http: HttpClient,
	private spinner: NgxSpinnerService) { }

  username ='commercialhaskell';
  repo ='stack';
  keyLength = 0;
  owner: string;
  repo1: string;
  p: number[] = [];
    ngOnInit() {
 
  }
  getSearchList() {
    this.spinner.show();
     this.http.get('https://api.github.com/repos/'+ this.owner +'/'+ this.repo1 +'/issues?page=1&per_page=5').subscribe(
      data =>{
        this.data = data as any[] ;
		 this.spinner.hide();
        return this.data;
      },
      (err : HttpErrorResponse)=> {
	   this.spinner.hide();
        return err.message;
      }
     );
	 this.spinner.hide();
     return null;
  }
    
  
  }

