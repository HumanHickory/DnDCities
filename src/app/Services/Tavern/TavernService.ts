import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Drink, MenuItemType, Tavern } from "src/app/Models/Tavern";
import { environment } from "src/environments/environment";


@Injectable()
export class TavernService {
    urlBase = "https://localhost:44350/";
    constructor(private http: HttpClient) { }

    GetTavern(cityId: number){
        return this.http.get<Tavern>(environment.apiUrl() + 'api/City/GetTavern?cityId='+ cityId);
    }

    ListDrinks(){
        return this.http.get<Drink[]>(environment.apiUrl() + 'api/City/ListDrinks');
    }
    

    AddTavernDetails(tavern: Tavern){
        return this.http.post<Tavern>(environment.apiUrl() + 'api/City/AddTavernDetails', tavern)
    }

    AddDrink(drink: Drink){
        return this.http.post<Drink>(environment.apiUrl() + 'api/City/AddDrink', drink)
    }
}