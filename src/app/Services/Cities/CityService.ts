import { HttpClient, HttpParams } from "@angular/common/http";
import { CityDetails } from "src/app/Models/CityDetails";
import { CitySize } from "src/app/Models/CitySize";
import { City } from "src/app/Models/City";
import { ColorScheme } from "src/app/Models/ColorScheme";
import { Help } from "src/app/Models/Help";
import { News } from "src/app/Models/News";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { CampaignLocation } from "src/app/Models/Campaign";

@Injectable()
export class CityService {
    News: News[] = [];
    Help: Help[] = [];
    urlBase = "https://localhost:44350/";

    constructor(private http: HttpClient) { }

    GetCitySizes(){
        return this.http.get<CitySize[]>(environment.apiUrl() + 'api/City/GetLocationSizes')
    }

    CreateOrUpdateLocation(location: City){
        return this.http.post(environment.apiUrl() + 'api/City/CreateOrUpdateLocation', location, {responseType: 'text'})
    }

    CreateOrUpdateLocationDetails(details: CityDetails){
        return this.http.post(environment.apiUrl() + 'api/City/CreateOrUpdateLocationDetails', details)
    }    
    
    SetCampaignLocation(locations: CampaignLocation[]){
        return this.http.post(environment.apiUrl() + 'api/City/SetCampaignLocation', locations)
    }

    GetCampaignLocation(cityId: number){
        return this.http.get<CampaignLocation[]>(environment.apiUrl() + 'api/City/GetCampaignLocation?CityId='+ cityId)
    }

    ListCampaigns(){
        return this.http.get<City[]>(environment.apiUrl() + 'api/City/ListCampaigns')
}

    GetLocations(campaignId: number){
            return this.http.get<City[]>(environment.apiUrl() + 'api/City/GetLocations/?CampaignId='+ campaignId +'&IsProd=' + environment.production)
    }

    GetLocationBasic(cityId: number){
        const params = new HttpParams()
        .set('Id', cityId);
        return this.http.get<City>(environment.apiUrl() + 'api/City/GetLocationBasic', {params})
    }

    GetLocation(cityId: number, campaignId: number){
            const params = new HttpParams()
                .set('Id', cityId)
                .set('campaignId', campaignId);

        return this.http.get<CityDetails>(environment.apiUrl() + 'api/City/GetLocation', {params} );
    }

}

