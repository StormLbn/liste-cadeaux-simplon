import { Injectable, Input } from "@angular/core";
import { Present } from "../models/present.model";

@Injectable ({
    providedIn : 'root'
})
export class PresentService {

    
  @Input() presentsList : Present[] = [
    {title : "Idée cadeau n°1",
      url : "https://github.com/SiderealStorm/liste-cadeaux-simplon",
      description : "Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      title : "Test 1",
      url : "Url du test 1",
      description : "Test test test test test test test test test test test test test test test test test",
    },
    {
      title : "Test 2",
      url : "Url du test 2",
      description : "Test test test test test test test test test test test test test test test test test",
    },
    {
      title : "Test 3",
      url : "Url du test 2",
      description : "Test test test test test test test test test test test test test test test test test",
    },
  ]

  getAllPresents() : Present[] {
    return this.presentsList;
  }
}