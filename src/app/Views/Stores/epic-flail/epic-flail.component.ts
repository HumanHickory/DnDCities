import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ExclusiveWeapon, Weapon } from 'src/app/Models/Weapon';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-epic-flail',
  templateUrl: './epic-flail.component.html',
  styleUrls: ['./epic-flail.component.css'],
  providers: [ShopService]
})
export class EpicFlailComponent implements OnInit {
  SimpleMelee: Weapon[] = [];
  SimpleRanged: Weapon[] = [];
  MartialMelee: Weapon[] = [];
  MartialRanged: Weapon[] = [];
  showTerms: boolean = false;
  ExclusiveWeapons: ExclusiveWeapon[] = [];

  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.shopService.GetWeapons().subscribe(weapons => {
      weapons.forEach(weapon => {
        switch (weapon.weaponTypeId) {
          case 1:
            this.SimpleMelee.push(weapon);
            break;
          case 2:
            this.MartialMelee.push(weapon);
            break;
          case 3:
            this.SimpleRanged.push(weapon);
            break;
          case 4:
            this.MartialRanged.push(weapon);
            break;
        }

      });

      this.shopService.GetExclusiveWeaponsByCityId(this.CityId).subscribe(weapons => {
        this.ExclusiveWeapons = weapons;
      });

      this.IsLoaded = true;
    });
  }

  CreateCheckerboard(squareNum: number){
      var creamArray = [1, 4, 6, 7, 9, 12, 14, 15, 17, 19];

      if(creamArray.includes(squareNum))
        return true;
      else 
        return false;
  }



}
