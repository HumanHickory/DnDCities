import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
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
  isProd = false;
  constructor(private cityServices: CityService, private appComp: AppComponent) { }

  ngOnInit(): void {
    this.cityServices.GetLocations().subscribe(cities => {
      this.Cities = cities;
      this.isLoaded = true;
      this.isProd = environment.production;
    });
  }
}

