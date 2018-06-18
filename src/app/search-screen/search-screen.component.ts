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
  repo :string;
  keyLength = 0;
  owner: string;
  repo1: any[] =[];
  p: number[] = [];
    ngOnInit() {
 
  }
  
  getRepos(){
   console.log(this.owner);
   var dataList = document.getElementById('repos-datalist');
   while (dataList.hasChildNodes()) {   
    dataList.removeChild(dataList.firstChild);
    }
   this.http.get('https://api.github.com/users/'+this.owner+'/repos?per_page=300').subscribe(
     data => {
      this.repo1 = data as any[] ;
      this.assignRepos();
      return this.repo1;
     },
     (err : HttpErrorResponse)=> { 
         err.message;
      }
     ); 
  }
  
  assignRepos(){
  var dataList = document.getElementById('repos-datalist');
  for (let i =0; i< this.repo1.length;i++){
         var option = document.createElement('option');
         option.value= this.repo1[i].name;
         dataList.appendChild(option);
     }
  }
  
  getSearchList() {
     this.http.get('https://api.github.com/repos/'+ this.owner +'/'+ this.repo+'/issues').subscribe(
      data =>{
        this.data = data as any[] ;
        this.owner = null;
        this.repo =null;
        return this.data;
      },
      (err : HttpErrorResponse)=> { 
        return err.message;
      }
     );
  }
  }

