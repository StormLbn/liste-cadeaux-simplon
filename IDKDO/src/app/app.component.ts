import { Component } from '@angular/core';
import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'IDKDO';

  constructor(private openAI : OpenAiService) {

  }
  ngOnInit(){
  }
}


