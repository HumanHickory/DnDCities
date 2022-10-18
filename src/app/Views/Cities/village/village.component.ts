
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from 'src/app/Models/Campaign';
import { CityDetails } from 'src/app/Models/CityDetails';
import { ColorScheme } from 'src/app/Models/ColorScheme';
import { CityService } from 'src/app/Services/Cities/CityService';
@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css'],
  providers: [CityService]
})
export class VillageComponent implements OnInit {

  Village: CityDetails;
  heroImg: string;
  View: string = "Main";
  responsiveOptions: any;
  Campaign: Campaign;


  constructor(private cityService: CityService,  private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    let campaign: any = localStorage.getItem("campaign") == null ? "" : localStorage.getItem("campaign");

    if(campaign == ""){
      this.router.navigateByUrl('/');
    } else {
      this.Campaign =JSON.parse(campaign);
    }

    this.cityService.GetLocation(cityId, this.Campaign.id).subscribe(details => {
      this.Village = details;  
      this.heroImg = 'url("../../../../assets/CityImg/' + this.Village.name +'.jpg") no-repeat center'; 
      console.log(this.Village);
    });

  }

  heroImgStyling(){
    return {'background': this.heroImg, 'background-size': 'cover', 'height': '50vh', 'position': 'relative'  }
  }

}
