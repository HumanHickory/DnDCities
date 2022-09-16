import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { GnomeDepotStock } from "src/app/Models/GnomeDepotStock";
import { Instrument } from "src/app/Models/Instrument";
import { Pack } from "src/app/Models/Pack";
import { Shop } from "src/app/Models/Shop";
import { SpecialOfTheDay } from "src/app/Models/SpecialOfTheDay";
import { ExclusiveWeapon, Weapon, WeaponsProperty } from "src/app/Models/Weapon";

@Injectable()
export class ShopService {
    urlBase = "https://localhost:44350/";
    constructor(private http: HttpClient) { }

    ListShops(){
        return this.http.get<Shop[]>(this.urlBase + 'api/City/ListShops');
    }
    GetShopsByCityId(cityId: number){
        return this.http.get<Shop[]>(this.urlBase + 'api/City/GetShopsByCityId?CityId=' + cityId);
    }

    GetWeapons(){
        return this.http.get<Weapon[]>(this.urlBase + 'api/Item/GetWeapons')
    }

    GetWeaponProperties(){
        return this.http.get<WeaponsProperty[]>(this.urlBase + 'api/Item/GetWeaponProperties')
    }    
    
    GetExclusiveWeaponsByCityId(cityId: number){
        return this.http.get<ExclusiveWeapon[]>(this.urlBase + 'api/City/GetExclusiveWeaponsByCityId?CityId=' + cityId);
    }

    GetShopSpeicals(cityId: number, shopId: number){
        return this.http.get<SpecialOfTheDay>(this.urlBase + 'api/City/GetShopSpeicals?CityId=' + cityId + "&ShopId=" + shopId);
    }

    StockGnomeDepot(){
        return this.http.get<GnomeDepotStock>(this.urlBase + 'api/City/StockGnomeDepot');
    }

    GetInstruments(){
        return this.http.get<Instrument[]>(this.urlBase + 'api/Item/GetInstruments');
    }
}