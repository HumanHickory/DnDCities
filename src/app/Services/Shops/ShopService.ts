import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { GnomeDepotStock } from "src/app/Models/GnomeDepotStock";
import { Instrument } from "src/app/Models/Instrument";
import { Mount } from "src/app/Models/Mount";
import { Shop } from "src/app/Models/Shop";
import { ShopSpecial } from "src/app/Models/ShopSpecial";
import { SpellScroll } from "src/app/Models/SpellScroll";
import { ExclusiveWeapon, Weapon, WeaponsProperty } from "src/app/Models/Weapon";
import { environment } from "src/environments/environment";

@Injectable()
export class ShopService {
    urlBase = "https://localhost:44350/";
    constructor(private http: HttpClient) { }

    ListShops(){
        return this.http.get<Shop[]>(environment.apiUrl() + 'api/City/ListShops');
    }
    GetShopsByCityId(cityId: number){
        return this.http.get<Shop[]>(environment.apiUrl() + 'api/City/GetShopsByCityId?CityId=' + cityId);
    }

    GetWeapons(){
        return this.http.get<Weapon[]>(environment.apiUrl() + 'api/Item/GetWeapons')
    }

    GetWeaponProperties(){
        return this.http.get<WeaponsProperty[]>(environment.apiUrl() + 'api/Item/GetWeaponProperties')
    }    
    
    GetExclusiveWeaponsByCityId(cityId: number){
        return this.http.get<ExclusiveWeapon[]>(environment.apiUrl() + 'api/City/GetExclusiveWeaponsByCityId?CityId=' + cityId);
    }

    GetShopSpecials(cityId: number, shopId: number){
        return this.http.get<ShopSpecial[]>(environment.apiUrl() + 'api/City/GetShopSpecials?CityId=' + cityId + "&ShopId=" + shopId);
    }

    StockGnomeDepot(){
        return this.http.get<GnomeDepotStock>(environment.apiUrl() + 'api/City/StockGnomeDepot');
    }

    GetInstruments(){
        return this.http.get<Instrument[]>(environment.apiUrl() + 'api/Item/GetInstruments');
    }    
    
    GetMounts(cityId: number){
        return this.http.get<Mount[]>(environment.apiUrl() + 'api/City/GetMountsByCityId?CityId=' + cityId);
    }

    GetSpellsByCityId(cityId: number){
        return this.http.get<SpellScroll[]>(environment.apiUrl() + 'api/City/GetSpellsByCityId?CityId=' + cityId);
    }
}