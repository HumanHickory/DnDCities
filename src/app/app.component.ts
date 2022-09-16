import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from './Models/City';
import { CityDetails } from './Models/CityDetails';
import { CityService } from './Services/Cities/CityService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CityService]
})
export class AppComponent {
  title = 'DnDCities';
  City: CityDetails;
  NavBarColor: string = "";

  constructor(private cityService: CityService ) { }

  ngOnInit(): void {
  }

    //for the shops pages
    getCityDetails(cityId: number){
      this.cityService.GetLocation(cityId).subscribe(details => {
        this.City = details;
      });
    }

}


