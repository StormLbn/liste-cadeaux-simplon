import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentIdeaComponent } from '../present-idea/present-idea.component';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  @Input() favList !: Present[];
  @Input() present !: Present;

  constructor(private http : HttpClient, private service : PresentService) {}

  ngOnInit() {
    this.http.get<Present[]>('http://localhost:3000/data').subscribe(result => {
      this.favList = result
    })
  }

  addFavs() {
    this.service.addFavourite(this.present).subscribe(data => {
      console.log(data);
      this.refreshFavs();
    })
  }

  refreshFavs() {
    this.http.get<Present[]>('http://localhost:3000/data').subscribe(result => {
      this.favList = result
    })
  }
}
