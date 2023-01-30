import { Component, Input, OnInit } from '@angular/core';
import { Present } from '../models/present.model';

@Component({
  selector: 'app-present-idea',
  templateUrl: './present-idea.component.html',
  styleUrls: ['./present-idea.component.scss']
})
export class PresentIdeaComponent implements OnInit{
  @Input() presentIdea !: Present;

  ngOnInit(): void {
  }
}
