import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConvertService } from 'src/app/services/convert.service';
import {Convert} from '../../../models/Convert';
import {HistoryService} from '../../../services/history.service'
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit, AfterViewInit {
convert: Convert = new Convert();
spinner=true;

  constructor(private _convertService: ConvertService,private _historyService:HistoryService) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this._convertService.spinner.subscribe(d=>this.spinner=d);
 
  }
  clearSum()
  {
    this.convert.sum = null;
  }
  currencyFromChange(e: string)
  {
    this.convert.from = e;
    this.tryConvert();
  }
  currencyToChange(e: string)
  {
    this.convert.to = e;
    this.tryConvert();
  }
  tryConvert() {
   
    if (this.convert.sum && this.convert.from && this.convert.to) {
   this._convertService.convert(this.convert).subscribe(res =>
    {
      this.convert.res = res;
      this.convert.date = new Date();
      this._historyService.addHistory({...this.convert})

    },err=>this._convertService.stop()

    );
   }
  }
}
