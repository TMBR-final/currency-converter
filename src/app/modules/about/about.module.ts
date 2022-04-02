import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewHistoryComponent} from './view-history/view-history.component'
import { Route, Router, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table'
import { HistoryService } from 'src/app/services/history.service';
const routes: Route[] = [
  { path: "", component:ViewHistoryComponent  },

      
  
];



@NgModule({
  declarations: [ViewHistoryComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  MatTableModule
  ],
  providers:[]
})
export class AboutModule { }
