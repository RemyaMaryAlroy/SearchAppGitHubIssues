import { Component, OnInit,Injectable, Injector } from '@angular/core';
import {SearchService} from 'app/search.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

searchCoulmnHeadings: any[]=[
{"key":"Issue Number", "value":"Issue Number"},
{"key" : "Issue Title", "value":"Issue Title"},
{"key":"Creation Date","value":"Creation Date"}
];
data: any[] =[];
  constructor( private searchservice: SearchService) { }

  ngOnInit() {
  this.showData();
  }
  showData(){
   
  }
}
