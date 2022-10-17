import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Rarity } from "src/app/Models/Item";
import { CurrencyType, DamageType, WeaponsProperty, WeaponType } from "src/app/Models/Weapon";
import { environment } from "src/environments/environment";

@Injectable()
export class TypeService {

    constructor(private http: HttpClient) { }

    ListCurrencyTypes(){
        return this.http.get<CurrencyType[]>(environment.apiUrl() + 'api/Common/ListCurrencyTypes')
    }

    ListRarity(){
        return this.http.get<Rarity[]>(environment.apiUrl() + 'api/Common/ListRarity')
    }

    ListWeaponsProperties(){
        return this.http.get<WeaponsProperty[]>(environment.apiUrl() + 'api/Common/ListWeaponsProperties')
    }    

    ListDamageTypes(){
        return this.http.get<DamageType[]>(environment.apiUrl() + 'api/Common/ListDamageTypes')
    }    

    ListWeaponTypes(){
        return this.http.get<WeaponType[]>(environment.apiUrl() + 'api/Common/ListWeaponTypes')
    }    

}

