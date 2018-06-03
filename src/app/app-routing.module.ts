import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { RouterModule, Routes } from '@angular/router';
import {IssuedetailsComponent } from './issuedetails/issuedetails.component';


const routes: Routes = [
  { path: 'search', component: SearchScreenComponent },
  { path: 'issuedetails/:id/:owner/:repo', component: IssuedetailsComponent},
  { path: '',component: SearchScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
