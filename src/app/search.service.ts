import { Injectable,Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SearchService {
apiUrlPrefix= 'https://api.github.com/repos/';
constructor(private http: HttpClient) { }
  
getSearchList() {
  console.log("hi");
  return this.http.get(this.apiUrlPrefix+'commercialhaskell/stack/issues');
}
}
