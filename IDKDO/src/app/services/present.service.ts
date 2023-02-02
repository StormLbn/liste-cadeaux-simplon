import { Injectable, Input } from "@angular/core";
import { Present } from "../models/present.model";

@Injectable ({
    providedIn : 'root'
})
export class PresentService {

    
  @Input() presentsList : Present[] = [
    {title : "Idée cadeau n°1",
      imageUrl : "Url du test 2",
      description : "Test test test test test test test test test test ",
      price : 6.66
    },
    {
      title : "Test 1",
      imageUrl : "Url du test 2",
      description : "Test test test test test test test test test test test test test test test test test",
      price : 6.66
    },
    {
      title : "Test 2",
      imageUrl : "Url du test 2",
      description : "Test test test test test test test test test test test test test test test test test",
      price : 6.66
    },
    {
      title : "Test 3",
      imageUrl : "Url du test 2",
      description : "Test test test test test test test test test test test test test test test test test",
      price : 6.66
    },
    
  ]

  getAllPresents() : Present[] {
    return this.presentsList;
  }
}