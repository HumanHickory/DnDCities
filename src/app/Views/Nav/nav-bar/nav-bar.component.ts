import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/Models/City';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() navBarLightText: boolean;
  @Input() cityId: number;
  @Input() cityName: string;

  City: City;
  TavernName: string;
  isLoaded: boolean = false;
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.GetLocationBasic(this.cityId).subscribe(details => {
      this.City = details;
    });

    this.cityService.GetLocation(this.cityId).subscribe(details => {
      this.TavernName = details.tavernName;  
      this.isLoaded = true;
    });
  }
}
