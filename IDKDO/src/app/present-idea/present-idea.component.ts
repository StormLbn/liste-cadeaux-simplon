import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-present-idea',
  templateUrl: './present-idea.component.html',
  styleUrls: ['./present-idea.component.scss']
})
export class PresentIdeaComponent implements OnInit{
  @Input() presentIdea !: Present;

  constructor(private http : HttpClient, private service : PresentService) {}

  ngOnInit(): void {
  }

  addFavourite() {
    this.service.addFavourite(this.presentIdea).subscribe(data => {
      console.log(data);
    })
  }
}
