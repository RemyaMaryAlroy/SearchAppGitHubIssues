import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.css']
})
export class IssuedetailsComponent implements OnInit {
 data: any[] = [];
 id;
  owner;
  repo;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private http: HttpClient) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
	    
        this.checkIssue(params.id,params.owner,params.repo);
      }
    );
  
  }
  checkIssue(id,owner,repo){
  this.owner = owner;
  this.repo= repo;
    this.http.get('https://api.github.com/repos/'+owner +'/'+repo+'/issues/'+id).subscribe(
      data =>{
        this.data = data as any[] ;
        return this.data;
      },
      (err : HttpErrorResponse)=> {
        return err.message;
      }
     );
     return null;
  }
}
