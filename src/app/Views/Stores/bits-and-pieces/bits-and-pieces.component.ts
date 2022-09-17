import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/Services/Shops/ShopService';
import {faLocationDot, faTruckMoving} from '@fortawesome/free-solid-svg-icons';
import { Mount } from 'src/app/Models/Mount';

@Component({
  selector: 'app-bits-and-pieces',
  templateUrl: './bits-and-pieces.component.html',
  styleUrls: ['./bits-and-pieces.component.css'],
  providers: [ShopService]

})
export class BitsAndPiecesComponent implements OnInit {
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;

  carouselImages: string[];

  faLocationDot = faLocationDot;
  faTruckMoving = faTruckMoving;

  Mounts: Mount[] = [];

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.carouselImages = ["carousel1.jpg", "carousel2.jpg"];

     this.shopService.GetMounts(this.CityId).subscribe(mounts => {
        this.Mounts = mounts;
         this.IsLoaded = true;
     });
  }
}


