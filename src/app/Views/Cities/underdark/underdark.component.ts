import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/Models/Campaign';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-underdark',
  templateUrl: './underdark.component.html',
  styleUrls: ['./underdark.component.css'],
  providers: [CityService]
})
export class UnderdarkComponent implements OnInit {

  City: CityDetails;
  heroImg: string;
  IsLoaded: boolean = false;
  ShowView: any;
  Campaign: Campaign;

  constructor(private cityService: CityService,  private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    let campaign: any = localStorage.getItem("campaign") == null ? "" : localStorage.getItem("campaign");

    if(campaign == ""){
      this.route.navigateByUrl('/');
    } else {
      this.Campaign =JSON.parse(campaign);
    }

    this.cityService.GetLocation(cityId, this.Campaign.id).subscribe(details => {
      this.City = details;  
      this.heroImg = 'url("../../../../assets/CityImg/' + this.City.name +'.jpg") no-repeat center'; 
      this.IsLoaded = true;
    });



  }

  heroImgStyling(){
    return {'background': this.heroImg, 'background-size': 'cover', 'height': '20vh', 'position': 'relative'  }
  }

}

