import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  constructor(public historyService:HistoryService) { }
  displayedColumns:string[]=['sum','from','to','res','date'];

  ngOnInit(): void {
  }
}
