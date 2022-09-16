import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { City } from 'src/app/Models/City';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CitySize } from 'src/app/Models/CitySize';
import { ColorScheme } from 'src/app/Models/ColorScheme';
import { Government } from 'src/app/Models/Government';
import { Help } from 'src/app/Models/Help';
import { News } from 'src/app/Models/News';
import { Shop } from 'src/app/Models/Shop';
import { CityService } from 'src/app/Services/Cities/CityService';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CityService, MessageService, ShopService]

})
export class CreateComponent implements OnInit {

  Sizes: CitySize[] = [];
  CitySize: CitySize;
  City: City;
  CityDetails: CityDetails;
  AllDataFetched: boolean = false;
  Cities: City[] = [];
  Shops: Shop[] = [];

  NewNews: News;
  NewHelp: Help;


  /************************
   * TO DO: Create a method that checks for cities with apostrophe and set the PathName to something else
   * Here's some example code. I didn't test it though.
  CitiesWithApostrophe(){
   if(this.CityName.includes("'")){
    var cityName = this.CityName;
    cityName.replace("'", "/'")
    this.urlWithApostrophe = cityName;
   }    
  }
   * 
   * ********************* */



  ShowNewsDialog: boolean = false;
  ShowHelpDialog: boolean = false;

  constructor(private cityService: CityService, 
    private messageService: MessageService, 
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.cityService.GetLocations().subscribe(cities => {
      this.Cities = cities;

    if(cityId > 0){
      this.SetCity(cityId);
    } else {
      this.ResetModel();
    }

    this.cityService.GetCitySizes().subscribe(citySizes => {
      this.Sizes = citySizes;
    });
    this.shopService.ListShops().subscribe(shops => {
      this.Shops = shops;
    });

    this.AllDataFetched = true;

    });



    
  }


  Save() {
    this.cityService.CreateOrUpdateLocation(this.City).subscribe(cityIdStr => {
      var cityId = parseInt(cityIdStr);
      this.CityDetails.cityId = cityId;
      this.CityDetails.colorScheme.cityId = cityId;
      this.CityDetails.government.cityId = cityId;

      this.CityDetails.news.forEach(x => {
        x.cityId = cityId
      });

      this.CityDetails.help.forEach(x => {
        x.cityId = cityId
      });

      this.cityService.CreateOrUpdateLocationDetails(this.CityDetails).subscribe(cityId => {
        this.ResetModel();
        this.messageService.add({ severity: 'success', summary: 'Saved City', detail: 'City and Details were successfully saved' });
      },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Failed to Save Details', detail: 'Unable to save details' });
        });
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Failed to Save City', detail: 'Unable to save city' });
      });
  }

  OpenNewsDialog() {
    this.NewNews = {
      id: 0,
      cityId: this.City.id,
      title: "",
      source: "",
      author: "",
      storyHtml: "",
    }

    this.ShowNewsDialog = true;
  }

  OpenHelpDialog() {
    this.NewHelp = {
      id: 0,
      cityId: this.City.id,
      title: "",
      detailsHtml: ""
    }

    this.ShowHelpDialog = true;
  }

  AddNews() {
    this.CityDetails.news.push(this.NewNews);
    this.ShowNewsDialog = false;
    this.CityDetails.news = [...this.CityDetails.news];
  }

  AddHelp() {
    this.CityDetails.help.push(this.NewHelp);
    this.ShowHelpDialog = false;
    this.CityDetails.help = [...this.CityDetails.help];
  }


  ResetModel(){
    this.City = {
      id: 0,
      name: "",
      area: "",
      size: "",
      sizeId: 0,
      show: true,
      pathName: ""
    }

    var Government = {
      title: "",
      descriptionHtml: "",
      id: 0,
      cityId: this.City.id
    }

    var ColorScheme = {
      id: 0,
      cityId: this.City.id,
      backgroundColor: '#000',
      colorA: "#000",
      colorB: "#000",
      colorC: "#000",
      colorD: "#000",
      primaryTextColor: "#000",
      secondaryTextColor: "#000",
      headerTextColor: "#000"
    }

    
    this.CityDetails = {
      motto: "",
      name: this.City.name,
      id: 0,
      cityId: this.City.id,
      history: "",
      magicIdeology: "",
      news:[],
      help:[],
      colorScheme: ColorScheme,
      government: Government,
      shops: [],
      tavernName: ""
    }

    this.ResetNewsAndHelp();
  }

  ResetNewsAndHelp(){
    this.NewHelp = {
      id: 0,
      cityId: this.City.id,
      title: "",
      detailsHtml: ""
    }

    this.NewNews = {
      id: 0,
      cityId: this.City.id,
      title: "",
      source: "",
      author: "",
      storyHtml: "",
    }
  }

  SetCity(cityId: number){
    this.cityService.GetLocation(cityId).subscribe(details => {
      this.CityDetails = details;  
    });

    this.cityService.GetLocationBasic(cityId).subscribe(details => {
      this.City = details;  
      this.ResetNewsAndHelp();
    });
  }
}
