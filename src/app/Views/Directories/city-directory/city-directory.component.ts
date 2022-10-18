import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Campaign } from 'src/app/Models/Campaign';
import { City } from 'src/app/Models/City';
import { CityService } from 'src/app/Services/Cities/CityService';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-city-directory',
  templateUrl: './city-directory.component.html',
  styleUrls: ['./city-directory.component.css'],
  providers: [CityService]
})
export class CityDirectoryComponent implements OnInit {

  Cities: City[] = [];
  isLoaded = false;
  isProd = true;
  askForCampaign = false;
  Campaigns: Campaign[] = [];
  SelectedCampaign: Campaign;
  Dev = false; //set to true to toggle campaigns
  constructor(private cityServices: CityService, private appComp: AppComponent) { }

  ngOnInit(): void {
    let Campaign: any = localStorage.getItem("campaign") == null ? "" : localStorage.getItem("campaign");
    if(Campaign == "" || this.Dev){
      this.cityServices.ListCampaigns().subscribe(campaigns => {
        this.Campaigns = campaigns;
        this.askForCampaign = true;
      });
    } else {
      this.SelectedCampaign = Campaign;
    }

    this.cityServices.GetLocations().subscribe(cities => {
      this.Cities = cities;
      this.isLoaded = true;
      this.isProd = environment.production;
    });
  }

  SaveCampaign(){
    localStorage.setItem("campaign", JSON.stringify(this.SelectedCampaign));
    this.askForCampaign = false;
  }
}

