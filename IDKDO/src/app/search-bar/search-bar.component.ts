import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchInput } from '../models/search-input.model';
import { OpenAiService } from '../open-ai.service';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  form !: FormGroup;
  @Input() input !: SearchInput;
  data !: string;

  constructor(private fb : FormBuilder, private openAi : OpenAiService, private service : PresentService, private route : Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      gender : [''],
      name : [''],
      age : [''],
      interest1 : [''],
      interest2 : [''],
      interest3 : ['']
    })
  }

  onSubmit() {
    const data = this.form.value;

    console.log(this.form.value);

    this.input = {
      gender : data["gender"],
      name : data["name"],
      age : data["age"],
      interest1 : data["interest1"],
      interest2 : data["interest2"],
      interest3 : data["interest3"]
    };
    this.openAi.getDataFromOpenAI(this.generateQuery())

  }

  generateQuery(): string {
    let query : string = "Donne moi une liste Json de 10 idées cadeaux "
    if (this.input) {
      if (!this.input.age) {
        if (this.input.gender) {
          query += this.input.gender;
        }
      } else if (this.input.age >= 18) {
        if (!this.input.gender) {
          query += "pour une personne de " + this.input.age + " ans";
        } else {
          query += "pour " + this.input.gender + " de " + this.input.age + " ans";
        }
      } else {
        if (!this.input.gender) {
          query += "pour un enfant de " + this.input.age + " ans";
        } else if (this.input.gender == "un homme") {
          query += "pour un garçon de " + this.input.age + " ans";
        } else {
        query += "pour une fille de " + this.input.age + " ans";
        }
      }

      if (this.input.name) {
      query += " qui s'appelle " + this.input.name;
      console.log("Ajout nom");
      }

      if (this.input.interest1 || this.input.interest2 || this.input.interest3) {
        query += " qui aime " + this.input.interest1 + " " + this.input.interest2 + " " + this.input.interest3;
        console.log("Ajout interet");
      }
    }
    query += "; je veux les résultats dans un fichier JSON avec les clés : nom, description, image, prix (en euros)."
    console.log(query);
    return query;
  }
}
