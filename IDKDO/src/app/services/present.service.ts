import { Injectable, Input } from "@angular/core";
import { Present } from "../models/present.model";

@Injectable ({
    providedIn : 'root'
})
export class PresentService {

    
  @Input() presentsList !: Present[];
  // = [
  //   {title : "Idée cadeau n°1",
  //     imageUrl : "Url du test 2",
  //     description : "Test test test test test test test test test test ",
  //     price : 6.66
  //   },
  //   {
  //     title : "Test 1",
  //     imageUrl : "Url du test 2",
  //     description : "Test test test test test test test test test test test test test test test test test",
  //     price : 6.66
  //   },
  //   {
  //     title : "Test 2",
  //     imageUrl : "Url du test 2",
  //     description : "Test test test test test test test test test test test test test test test test test",
  //     price : 6.66
  //   },
  //   {
  //     title : "Test 3",
  //     imageUrl : "Url du test 2",
  //     description : "Test test test test test test test test test test test test test test test test test",
  //     price : 6.66
  //   },
    
  // ]

  savePresentsList(data : string) {
    this.presentsList = [];
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    for (let element of jsonData) {
      let present : Present = {
        title : element.nom,
        description : element.description,
        imageUrl : element.image,
        price : element.prix
      }
      this.presentsList.push(present);
    }
    console.log(this.presentsList)
  }

  getAllPresents() : Present[] {
    return this.presentsList;
  }
}