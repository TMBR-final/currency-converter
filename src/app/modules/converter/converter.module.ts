import { NgModule } from '@angular/core';
import { CommonModule, NumberFormatStyle } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ConvertService} from '../../services/convert.service';
import { CurrencySelectComponent } from './currency-select/currency-select.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select'
const routes: Route[] = [
  { path: "", component:ConverterComponent  },

      
  
];

@NgModule({
  declarations: [ConverterComponent, CurrencySelectComponent],
  providers:[ConvertService],
  imports: [
    
    CommonModule,RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule ,
    MatInputModule ,
    MatSelectModule,
    MatIconModule,
    FormsModule

  ]
})
export class ConverterModule { }
