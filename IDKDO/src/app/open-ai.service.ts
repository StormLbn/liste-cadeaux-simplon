import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { filter, map } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly openai = new OpenAI({
    apiKey: environment.openAIToken,
    dangerouslyAllowBrowser: true
  });

  getDataFromOpenAI(text : string){
    return from(this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": text}],
      max_tokens: 4000,
    })).pipe(
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text))
  }

  async getImageFromOpenApi(text : string){
  const response = await this.openai.images.generate({
    prompt: text,
    n: 1,
    size: "256x256",
  });
  console.log(response.data[0].url)
    return response.data[0].url
  }
}
