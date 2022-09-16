import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialOfTheDay } from 'src/app/Models/SpecialOfTheDay';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-five-fingers',
  templateUrl: './five-fingers.component.html',
  styleUrls: ['./five-fingers.component.css'],
  providers: [ShopService]

})
export class FiveFingersComponent implements OnInit {
  Special: SpecialOfTheDay = null;
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.shopService.GetShopSpeicals(this.CityId, 5).subscribe(special => {
        this.Special = special;
        this.IsLoaded = true;
    });
  }

}
