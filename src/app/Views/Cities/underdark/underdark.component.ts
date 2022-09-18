import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CityService } from 'src/app/Services/Cities/CityService';
import {faCircleQuestion, IconDefinition} from '@fortawesome/free-solid-svg-icons';

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

  faCircleQuestion = faCircleQuestion;

  MenuItems: IconMenu[] = [];
  SelectedTab: IconMenu;

  constructor(private cityService: CityService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.cityService.GetLocation(cityId).subscribe(details => {
      this.City = details;  
      this.heroImg = 'url("../../../../assets/CityImg/' + this.City.name +'.jpg") no-repeat center'; 
      this.CreateMenu();
      this.IsLoaded = true;
    });

  }

  heroImgStyling(){
    return {'background': this.heroImg, 'background-size': 'cover', 'height': '20vh', 'position': 'relative'  }
  }

  CreateMenu(){
    var helpWanted: IconMenu = {name: 'Help Wanted', icon: faCircleQuestion};
    var news: IconMenu = {name: 'News', icon: faCircleQuestion};
    var gov: IconMenu = {name: 'Government', icon: faCircleQuestion};
    var history: IconMenu = {name: 'History', icon: faCircleQuestion};

    this.MenuItems.push(helpWanted, news, gov, history);
  }

}

interface IconMenu {
  name: string;
  icon: IconDefinition;
}
