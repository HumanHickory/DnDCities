import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { City } from 'src/app/Models/City';
import { CityService } from 'src/app/Services/Cities/CityService';
@Component({
  selector: 'app-city-directory',
  templateUrl: './city-directory.component.html',
  styleUrls: ['./city-directory.component.css'],
  providers: [CityService]
})
export class CityDirectoryComponent implements OnInit {

  Cities: City[] = [];
  constructor(private cityServices: CityService, private appComp: AppComponent) { }

  ngOnInit(): void {
    this.cityServices.GetLocations().subscribe(cities => {
      console.log(cities);
      this.Cities = cities;
    });
  }


}

