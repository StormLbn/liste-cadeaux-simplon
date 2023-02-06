import { Component, Input } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorie-card',
  templateUrl: './favorie-card.component.html',
  styleUrls: ['./favorie-card.component.scss']
})
export class FavorieCardComponent {

  @Input() presentFavorie !: Present;
  status !: string;

  constructor(private service : PresentService, private http : HttpClient) {}

  deletePresent() : void {
    this.http.delete('http://localhost:3000/data/'+this.presentFavorie.id)
    .subscribe(() => this.status = 'Delete successful');
  }
}
