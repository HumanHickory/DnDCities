import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-armorcrombie-and-fitch',
  templateUrl: './armorcrombie-and-fitch.component.html',
  styleUrls: ['./armorcrombie-and-fitch.component.css'],
  providers: [ShopService]

})
export class ArmorcrombieAndFitchComponent implements OnInit {
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");
  }

}
