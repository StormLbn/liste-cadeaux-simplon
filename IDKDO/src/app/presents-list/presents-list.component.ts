import { Component, Input, OnInit } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-presents-list',
  templateUrl: './presents-list.component.html',
  styleUrls: ['./presents-list.component.scss']
})
export class PresentsListComponent implements OnInit{

  @Input() presentsList !: Present[];

  constructor(private service : PresentService) {}

  ngOnInit() : void {
    this.presentsList = this.service.getAllPresents();
  }
}
