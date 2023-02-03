import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration, OpenAIApi } from 'openai';
import { filter, map } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment.development';
import { PresentService } from './services/present.service';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  data !: string;

  constructor(private service : PresentService, private route : Router) { 
  }

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text : string){
    let jsonData : string = "";
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 3000
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
      console.log(data);
      this.service.savePresentsList(data)
      this.route.navigateByUrl("recherche");
    });
  }
}
