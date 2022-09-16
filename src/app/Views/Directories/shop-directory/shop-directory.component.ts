import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/Models/City';
import { Shop } from 'src/app/Models/Shop';
import { CityService } from 'src/app/Services/Cities/CityService';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-shop-directory',
  templateUrl: './shop-directory.component.html',
  styleUrls: ['./shop-directory.component.css'],
  providers: [ShopService]
})
export class ShopDirectoryComponent implements OnInit {
  CityId: number;
  Shops: Shop[];
  CityName: string;

  constructor(private activatedRoute: ActivatedRoute, 
    private cityService: CityService,
    private shopService: ShopService) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.shopService.GetShopsByCityId(this.CityId).subscribe(shops => {
      shops.forEach(shop => {
        shop.imgLocation = this.ShopImage(shop.id);
        shop.nameTrimmed = shop.name.replace(/\s/g, "");
      });
      this.Shops = shops;
    });

    this.cityService.GetLocation(this.CityId).subscribe(details => {
      this.CityName = details.name; 
    });
  }

  ShopImage(shopId: number) {
    switch (shopId) {
      case 1:
        return "EpicFlail/flail.png";
        break;
      case 2:
        return "Armor/halfPlate.png";
        break;
      case 3:
        return "icons/gnome.png";
        break;
      case 4:
        return "icons/victorious secret.jpg";
        break;
      case 5:
        return "icons/Nott.png";
        break;
      case 6:
        return "OutsideTheBach/viol.png";
        break;
      case 7:
        return "EoB/beholder.png";
        break;
      case 8:
        return "icons/zimzam.jpg";
        break;
      case 9:
        return "icons/bitsAndPieces.png";
        break;
      default:
        return "";
        break;
    }
  }

}
