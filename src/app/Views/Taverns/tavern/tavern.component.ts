import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { City } from 'src/app/Models/City';
import { MenuItemType, Tavern, TavernRecipe } from 'src/app/Models/Tavern';
import { CityService } from 'src/app/Services/Cities/CityService';
import { TavernService } from 'src/app/Services/Tavern/TavernService';

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css'],
  providers: [TavernService, CityService]
})
export class TavernComponent implements OnInit {
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  City: City;
  Tavern: Tavern;
  isLoaded: boolean = false;
  Recipes: TavernRecipe[] = [];
  SelectedTab: MenuItemType;

  constructor(private activatedRoute: ActivatedRoute,
     private cityService: CityService,
     private tavernService: TavernService) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");
    this.GetCity();

    this.tavernService.GetTavern(this.CityId).subscribe(tavern => {
      this.Tavern = tavern;
      this.Tavern.menuItemTypes.push({id: 0, name: "Drinks"});
      this.SelectedTab = tavern.menuItemTypes[0];
      this.UpdateMenuItems();
      this.isLoaded = true;
    });
  }

  ToggleMenu(tab: MenuItemType) {
    this.SelectedTab = tab;
    this.UpdateMenuItems();
  }

  UpdateMenuItems() {
    this.Recipes = [];
    this.Tavern.recipes.forEach(recipe => {
      if (recipe.menuItemTypeId == this.SelectedTab.id) {
        this.Recipes.push(recipe);
      }
    });
  }

GetCity(){
  this.cityService.GetLocationBasic(this.CityId).subscribe(city => {
      this.City = city;
  });
}



}
