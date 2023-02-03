import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-presents-list',
  templateUrl: './presents-list.component.html',
  styleUrls: ['./presents-list.component.scss']
})
export class PresentsListComponent implements OnInit{

  @Input() presentsList !: Present[];
  @Input() listC!: Present[]

  constructor(private service : PresentService, private route : Router) {}

  ngOnInit() : void {
    this.route.navigateByUrl("recherche");
  }
}
