import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent implements OnInit {

  City: CityDetails;
  heroImg: string;
  IsLoaded: boolean = false;
  ShowView: any;
  constructor(private cityService: CityService,  private activatedRoute: ActivatedRoute, public appComp: AppComponent) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.cityService.GetLocation(cityId).subscribe(details => {
      this.City = details;  
      this.heroImg = 'url("../../../../assets/CityImg/' + this.City.name +'.jpg") no-repeat center'; 
      this.IsLoaded = true;
    });



  }

  heroImgStyling(){
    return {'background': this.heroImg, 'background-size': 'cover', 'height': '20vh', 'position': 'relative'  }
  }


}
