import { HttpClient } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Present } from "../models/present.model";

@Injectable ({
    providedIn : 'root'
})
export class PresentService {

    jsonUrl: string = "http://localhost:3000/data";

    constructor(private http : HttpClient) {}

    addFavourite(presentIdea : Present) : Observable<any> {
        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(presentIdea);
        console.log(body);
        return this.http.post(this.jsonUrl, body, {'headers':headers});
    }
}