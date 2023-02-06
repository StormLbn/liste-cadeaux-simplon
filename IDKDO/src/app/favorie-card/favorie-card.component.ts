import { Component, Input } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-favorie-card',
  templateUrl: './favorie-card.component.html',
  styleUrls: ['./favorie-card.component.scss']
})
export class FavorieCardComponent {

  @Input() presentFavorie !: Present;

  constructor(private service : PresentService) {}

  deletePresent() : void {
    this.service.removeFavourite(this.presentFavorie);
    alert("L'idée cadeau a bien été supprimée des favoris")
    window.location.reload();
  }
}
