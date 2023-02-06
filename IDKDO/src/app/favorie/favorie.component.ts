import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.scss']
})
export class FavorieComponent implements OnInit {

  @Input() dataFavorie !: Present[];
  @Input() present !: Present;

  constructor(private http : HttpClient, private service : PresentService) {}

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    
    this.http.get<Present[]>('http://localhost:3000/data').subscribe(result => {
      this.dataFavorie = result
    })
  }
}

