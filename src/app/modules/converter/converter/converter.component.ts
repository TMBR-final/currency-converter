import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConvertService } from 'src/app/services/convert.service';
import {Convert} from '../../../models/Convert';
import {HistoryService} from '../../../services/history.service'
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
convert: Convert = new Convert();
spinner:Observable<boolean>;

  constructor(private _convertService: ConvertService,private _historyService:HistoryService) { }
  ngOnInit(): void {
    this.spinner=this._convertService.spinner;
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
    this.convert.res = null;
    if (this.convert.sum && this.convert.from && this.convert.to) {
   this._convertService.convert(this.convert).subscribe(res =>
    {
      this.convert.res = res;
      this.convert.date = new Date();
      this._historyService.addHistory({...this.convert})

    }

    );
   }
  }
}
