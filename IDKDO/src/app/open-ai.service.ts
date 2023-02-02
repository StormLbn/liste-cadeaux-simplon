import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { filter, map } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { 
  }

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });

  readonly openai = new OpenAIApi(this.configuration);

  

  getDataFromOpenAI(text : string) {
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 256
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    ).subscribe(data => {
        console.log(data);
    });
  }
 

}
