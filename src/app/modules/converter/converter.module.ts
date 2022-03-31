import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: "", component:ConverterComponent  },

      
  
];

@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ConverterModule { }
