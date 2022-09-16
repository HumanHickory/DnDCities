import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Tavern } from "src/app/Models/Tavern";


@Injectable()
export class TavernService {
    urlBase = "https://localhost:44350/";
    constructor(private http: HttpClient) { }

    GetTavern(cityId: number){
        return this.http.get<Tavern>(this.urlBase + 'api/City/GetTavern?cityId='+ cityId);
    }
 
}