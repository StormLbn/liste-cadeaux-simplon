import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Present } from '../models/present.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  @Input() favList !: Present[];

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.http.get<Present[]>('http://localhost:3000/data').subscribe(result => {
      this.favList = result
    })
  }
}
