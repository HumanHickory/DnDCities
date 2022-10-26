import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CityMount } from "src/app/Models/CityMount";
import { Diety } from "src/app/Models/Diety";
import { GnomeDepotStock } from "src/app/Models/GnomeDepotStock";
import { Instrument } from "src/app/Models/Instrument";
import { Item } from "src/app/Models/Item";
import { Mount } from "src/app/Models/Mount";
import { Shop } from "src/app/Models/Shop";
import { ShopSpecial } from "src/app/Models/ShopSpecial";
import { Spell } from "src/app/Models/Spell";
import { SpellScroll } from "src/app/Models/SpellScroll";
import { DamageType, ExclusiveWeapon, Weapon, WeaponsProperty, WeaponType } from "src/app/Models/Weapon";
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
    
    GetExclusiveWeaponsByCityId(cityId: number){
        return this.http.get<ExclusiveWeapon[]>(environment.apiUrl() + 'api/City/GetExclusiveWeaponsByCityId?CityId=' + cityId);
    }

    AddExclusiveWeapons(weapons: ExclusiveWeapon[]){
        return this.http.post(environment.apiUrl() + 'api/City/AddExclusiveWeapons', weapons)
    }

    GetShopSpecials(cityId: number, shopId: number){
        return this.http.get<ShopSpecial[]>(environment.apiUrl() + 'api/City/GetShopSpecials?CityId=' + cityId + "&ShopId=" + shopId);
    }

    StockGnomeDepot(){
        return this.http.get<GnomeDepotStock>(environment.apiUrl() + 'api/City/StockGnomeDepot');
    }

    StockDivineRiteAid(){
        return this.http.get<Item[]>(environment.apiUrl() + 'api/City/StockDivineRiteAid');
    }

    GetInstruments(){
        return this.http.get<Instrument[]>(environment.apiUrl() + 'api/Item/GetInstruments');
    }    
    
    GetMountsByCityId(cityId: number){
        return this.http.get<Mount[]>(environment.apiUrl() + 'api/City/GetMountsByCityId?CityId=' + cityId);
    }

    ListMounts(){
        return this.http.get<Mount[]>(environment.apiUrl() + 'api/City/ListMounts');
    }

    AddMountsToCity(cityMounts: CityMount[]){
        return this.http.post(environment.apiUrl() + 'api/City/AddMountsToCity', cityMounts)
    }    
    
    AddShopSpecials(specials: ShopSpecial[]){
        return this.http.post(environment.apiUrl() + 'api/City/AddShopSpecials', specials)
    }

    GetSpellsByCityId(cityId: number){
        return this.http.get<SpellScroll[]>(environment.apiUrl() + 'api/City/GetSpellsByCityId?CityId=' + cityId);
    }

    GetCityDietiesByCityId(cityId: number){
        return this.http.get<Diety[]>(environment.apiUrl() + 'api/City/GetCityDietiesByCityId?CityId=' + cityId);
    }

    AddSpellToCity(shopSpells: SpellScroll[]){
        return this.http.post(environment.apiUrl() + 'api/City/AddSpellToCity', shopSpells)
    }
}
