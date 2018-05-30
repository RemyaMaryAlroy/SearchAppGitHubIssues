import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'search', component: SearchScreenComponent }
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
