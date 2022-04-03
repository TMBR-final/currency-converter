import { HttpClient } from '@angular/common/http';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {combineAll, filter, map, tap} from 'rxjs/operators';
import { Convert } from '../models/Convert';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
spinner:BehaviorSubject<boolean>=new BehaviorSubject(true);
  constructor(private _http: HttpClient) { }
private _rates: BehaviorSubject<any>=new BehaviorSubject(null);
public get ratesData(): Observable<any>
{
  if (!this._rates.getValue()) {
    
 
     this.getRates();
  }
  return this._rates;
}
spin()
{
  this.spinner.next(true);
}
stop()
{
  this.spinner.next(false);
  
}
  getRates(): Observable<any>
  {
this.spin()

    return this._http.get<any>("http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&format=1")
  .pipe( tap(data => { this._rates.next(data);
  this.stop();

  }));

  }
  getCurrencies(): Observable<string[]>
  {
    
    return this.getRates().pipe(
      filter(r=>r!=null),
      map(r =>{
      if(r) 
      return Object.keys(r["rates"])
    }));
  }

  convert(convert:Convert): Observable<number>
  {
   
    return  this.getRates().pipe(map(r =>(convert.sum*r["rates"][convert.from])/r["rates"][convert.to]))
  }

}
