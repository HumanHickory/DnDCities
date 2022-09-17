import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Tavern } from "src/app/Models/Tavern";
import { environment } from "src/environments/environment";


@Injectable()
export class TavernService {
    urlBase = "https://localhost:44350/";
    constructor(private http: HttpClient) { }

    GetTavern(cityId: number){
        return this.http.get<Tavern>(environment.apiUrl() + 'api/City/GetTavern?cityId='+ cityId);
    }
 
}