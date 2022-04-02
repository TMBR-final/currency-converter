import { Injectable, OnDestroy } from '@angular/core';
import {Convert} from '../models/Convert';
@Injectable({
  providedIn: 'root'
})
export class HistoryService  {

  constructor() {

   }
 
  _history: Convert[];
  public get history(): Convert[]
  {
    if ( !this._history)
    {
     
      let oldHistory= JSON.parse(localStorage.getItem('history')) as Convert[];
      if(oldHistory)
      this._history=oldHistory;
      else
      this._history=[];
    }
   
     
    return this._history;
  }
  addHistory(newHistory:Convert)
  {
    
    this._history.push(newHistory)
    localStorage.setItem('history',JSON.stringify(this._history))
  }
  }
