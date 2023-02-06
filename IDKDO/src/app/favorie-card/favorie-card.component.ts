import { Component, Input } from '@angular/core';
import { Present } from '../models/present.model';

@Component({
  selector: 'app-favorie-card',
  templateUrl: './favorie-card.component.html',
  styleUrls: ['./favorie-card.component.scss']
})
export class FavorieCardComponent {

  @Input() presentFavorie !: Present;


}
