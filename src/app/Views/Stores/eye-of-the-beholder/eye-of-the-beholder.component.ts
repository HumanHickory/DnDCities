import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';
import { ShopSpecial } from 'src/app/Models/ShopSpecial';
import { SpellScroll } from 'src/app/Models/SpellScroll';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-eye-of-the-beholder',
  templateUrl: './eye-of-the-beholder.component.html',
  styleUrls: ['./eye-of-the-beholder.component.css'],
  providers: [ShopService]
})
export class EyeOfTheBeholderComponent implements OnInit {
  CityName: string;
  isLoaded: boolean = false;
  CityId: number;
  carouselImages: string[] = ["arcane.png"];

  Potions: Potion[] = [];
  Specials: ShopSpecial[] = [];
  SpellScrolls: SpellScroll[] = [];

  menuItems: string[] = ['Specials', 'Items of the Craft', 'Potions', 'Focuses', 'Spell Scrolls'];
  selectedTab: string = this.menuItems[0];

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");

    this.shopService.GetShopSpecials(this.CityId, 7).subscribe(specials => {
      this.Specials = specials;
    });

    this.shopService.GetSpellsByCityId(this.CityId).subscribe(spells => {
      this.SpellScrolls = spells;
      console.log(spells);
    });

    this.CreatePotions();
    this.isLoaded = true;
  }

  CreatePotions(){

    var healing: Potion = {
      name: "Healing",
      price: 50,
      lowerPrice: 40,
      description: "2d4 + 2"
    }

    var greaterHealing: Potion = {
      name: "Greater Healing",
      price: 200,
      lowerPrice: 180,
      description: "4d4 + 4"
    }

    var superiorHealing: Potion = {
      name: "Superior Healing",
      price: 2000,
      lowerPrice: 1900,
      description: "8d4 + 8"
    }

    var supremeHealing: Potion = {
      name: "Supreme Healing",
      price: 20000,
      lowerPrice: 1900,
      description: "10d4 + 20"
    }

    var climbing: Potion= {
      name: "Potion of Climbing",
      price: 150,
      lowerPrice: 145,
      description: "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors."
    }
    
    var poison: Potion= {
      name: "Potion of Poison",
      price: 225,
      lowerPrice: 200,
      description: "This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature. If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0."
    }    
    
    var advantage: Potion= {
      name: "Potion of Advantage",
      price: 50,
      lowerPrice: 47,
      description: "When you drink this potion, you gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour. This potion takes the form of a sparkling, golden mist that moves and pours like water"
    }

    var growth: Potion= {
      name: "Potion of Growth",
      price: 100,
      lowerPrice: 90,
      description: "When you drink this potion, you gain the 'enlarge' effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process."
    }

    this.Potions.push(healing);
    this.Potions.push(greaterHealing);
    this.Potions.push(superiorHealing);
    this.Potions.push(supremeHealing);

    this.Potions.push(climbing);
    this.Potions.push(poison);
    this.Potions.push(growth);
    this.Potions.push(advantage);
  }

  ToggleMenu(tab: string){
    this.selectedTab = tab;
  }

}

export interface Potion {
  name: string;
  description: string;
  price: number;
  lowerPrice: number;
}
