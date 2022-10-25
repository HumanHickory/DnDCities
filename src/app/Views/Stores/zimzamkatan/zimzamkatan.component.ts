import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopSpecial } from 'src/app/Models/ShopSpecial';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-zimzamkatan',
  templateUrl: './zimzamkatan.component.html',
  styleUrls: ['./zimzamkatan.component.css'],
  providers: [ShopService]

})
export class ZimzamkatanComponent implements OnInit {

  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  Inventory: ShopSpecial[] = [];
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.shopService.GetShopSpecials(this.CityId, 8).subscribe(specials => {
      this.Inventory = specials;
      this.IsLoaded = true;
    });
  }

  getBackgroundColor(index: number){
    if(index % 2==0)
      return "black";
    else 
      return "#e0e0e0";
  }

  getColor(index: number){
    if(index % 2==0)
      return "white";
    else 
      return "black";  }

}
