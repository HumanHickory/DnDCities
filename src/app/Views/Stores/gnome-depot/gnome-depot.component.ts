import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'primeng/rating';
import { GnomeDepotStock } from 'src/app/Models/GnomeDepotStock';
import { Pack } from 'src/app/Models/Pack';
import { ShopSpecial } from 'src/app/Models/ShopSpecial';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-gnome-depot',
  templateUrl: './gnome-depot.component.html',
  styleUrls: ['./gnome-depot.component.css'],
  providers: [ShopService]
})
export class GnomeDepotComponent implements OnInit {

  carouselImages: string[];
  SpecialOfTheDay: ShopSpecial;
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  Packs: Pack[] = [];
  val: number = 3;
  Stock: GnomeDepotStock;
  generalCols: any[];
  miniCols: any[];

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<any> {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.generalCols = [
      { field: 'name', header: 'Name' },
      { field: 'fullPrice', header: 'Price' },
      { field: 'weight', header: 'Weight' },
      { field: 'description', header: 'Notes' }
    ];

    this.miniCols = [
      { field: 'name', header: 'Name' },
      { field: 'fullPrice', header: 'Price' },
      { field: 'weight', header: 'Weight' },
    ];

    this.carouselImages = ["carousel2.jpg", "carousel3.jpg"];

    await this.StockGnomeDepot();
    await this.GetShopSpecial();

    this.IsLoaded = true;
  }

  async StockGnomeDepot() {
    this.shopService.StockGnomeDepot().subscribe(stock => {
      this.Stock = stock;

      this.Stock.packs.forEach(pack => {
        pack.rating = this.GeneratePackRating();
      });

      this.Stock.tools.forEach(items => {
        items.fullPrice = items.price + " " + items.currencyType.abbreviation;
      });

      this.Stock.storageSolutions.forEach(items => {
        items.fullPrice = items.price + " " + items.currencyType.abbreviation;
      });

      this.Stock.wildernessSurvival.forEach(items => {
        items.fullPrice = items.price + " " + items.currencyType.abbreviation;
      });

      this.Stock.generalSupplies.forEach(items => {
        items.fullPrice = items.price + " " + items.currencyType.abbreviation;
      });
    });
  }

  async GetShopSpecial() {
    this.shopService.GetShopSpecials(this.CityId, 3).subscribe(specials => {
      this.SpecialOfTheDay = specials[0];
      this.IsLoaded = true;

    });
  }

  GeneratePackRating() {
    var min = 0;
    var max = 5;
    return Math.random() * (max - min) + min;
  }

  GeneratePackRatingCount() {
    var min = 1;
    var max = 1000;
    return Math.floor(Math.random() * (max - min) + min);

  }

}
