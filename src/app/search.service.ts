import { Injectable,Injector } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
private username:string;
    url = 'app/assets/json/data.json';
    constructor(private http: HttpClient){
    }

    getUser(){
	    console.log("reached");
        return this.http.get(this.url);
    }

    
	
  
}


