import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewHistoryComponent} from './components/view-history/view-history.component'
import { Route, Router, RouterModule } from '@angular/router';
const routes: Route[] = [
  { path: "", component:ViewHistoryComponent  },

      
  
];



@NgModule({
  declarations: [ViewHistoryComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
