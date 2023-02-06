import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Present } from '../models/present.model';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.scss']
})
export class FavorieComponent implements OnInit {

  dataFavorie !: any;
  @Input() presentFavorie !: Present;

  


  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/data').subscribe(data => {
      this.dataFavorie = data;
      console.log(this.dataFavorie);
    })
  }

}
