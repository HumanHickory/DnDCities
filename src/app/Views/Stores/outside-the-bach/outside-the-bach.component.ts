import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instrument } from 'src/app/Models/Instrument';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-outside-the-bach',
  templateUrl: './outside-the-bach.component.html',
  styleUrls: ['./outside-the-bach.component.css'],
  providers: [ShopService]

})
export class OutsideTheBachComponent implements OnInit {
  Instruments: Instrument[] = [];

  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  responsiveOptions: any;


  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2,
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1,
      }
  ];

    this.shopService.GetInstruments().subscribe(instruments => {
      this.Instruments = instruments;
    });

  }

}
