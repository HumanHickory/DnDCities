import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diety } from 'src/app/Models/Diety';
import { Item } from 'src/app/Models/Item';
import { ShopService } from 'src/app/Services/Shops/ShopService';
import {faLocationDot, faTruckMoving} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-divine-rite-aid',
  templateUrl: './divine-rite-aid.component.html',
  styleUrls: ['./divine-rite-aid.component.css'],
  providers: [ShopService]

})
export class DivineRiteAidComponent implements OnInit {
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;

  responsiveOptions;

  Inventory: Item[] = [];
  Dieties: Diety[] = [];

  faLocationDot = faLocationDot;
  faTruckMoving = faTruckMoving;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  async ngOnInit(): Promise<any> {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    await this.GetStock();
    await this.GetGods();
    this.IsLoaded = true; 
  }

  async GetStock(){
    this.shopService.StockDivineRiteAid().subscribe(items => {
      this.Inventory = items;
    });
  }

  async GetGods(){
    this.shopService.GetCityDietiesByCityId(this.CityId).subscribe(gods => {
      this.Dieties = gods;
    });
  }

}
