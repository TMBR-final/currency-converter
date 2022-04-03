import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ConvertService } from 'src/app/services/convert.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent implements OnInit {

@Input() lable:string=""
@Output() currencySelected:EventEmitter<string>=new EventEmitter<string>()
  constructor(private _convertService:ConvertService) { }

  myControl = new FormControl();
  currenciesList: string[];
  filteredOptions: Observable<string[]>;
  myForm:FormGroup
  ngOnInit(): void {
    this.myForm = new FormGroup({          
      'myControl':this.myControl, 
    
 })
    this._convertService.getCurrencies().subscribe(currencies=>{
      this.currenciesList=currencies;
    },err=>this._convertService.stop())
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    if(this.currenciesList)
    {
    const filterValue = value.toLowerCase();

    return this.currenciesList.filter(option => option.toLowerCase().includes(filterValue));
    }
    else 
    return []
  }
  optionSelected(e:MatAutocompleteSelectedEvent)
  {
    this.currencySelected.emit(e.option.value)
  }
}
