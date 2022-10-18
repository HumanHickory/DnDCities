import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyType } from 'src/app/Models/Weapon';
import { ShopService } from 'src/app/Services/Shops/ShopService';

@Component({
  selector: 'app-victorious-secret',
  templateUrl: './victorious-secret.component.html',
  styleUrls: ['./victorious-secret.component.css'],
  providers: [ShopService]

})
export class VictoriousSecretComponent implements OnInit {

  Special: Special;
  SpecialImg: string[] = [];
  CityName: string;
  IsLoaded: boolean = false;
  CityId: number;
  TrendingClothes: Clothes[] = [];
  Clothes: Clothes[] = [];
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
    this.CityName = this.activatedRoute.snapshot.paramMap.get("cityName");
    this.GenerateSpecials();
    this.GenerateTrendingClothes();
    this.GenerateClothes();
  }

  GenerateTrendingClothes(){
    var common: Clothes = {
      name: "Common Clothes",
      rating: 4,
      originalPrice: 10,
      price: 5,
      currencyTypeAbbreviation: 'sp',
      description: 'This set of clothes could consist of a loose shirt and baggy breeches, or a loose shirt and skirt or overdress. Cloth wrappings are used for shoes.',
      imgPath: 'common.png'
    };

    var fine: Clothes = {
      name: "Fine Clothes",
      rating: 5,
      originalPrice: 20,
      price: 15,
      currencyTypeAbbreviation: 'gp',
      description: 'This set of clothes is designed specifically to be expensive and to show it, including fancy, tailored clothes in whatever fashion happens to be the current style in the courts of the nobles.Precious metals and gems could be worked into the clothing.',
      imgPath: 'fine.png'
    };

    var travelers: Clothes = {
      name: "Traveler's Clothing",
      rating: 3,
      originalPrice: 5,
      price: 2,
      currencyTypeAbbreviation: 'gp',
      description: 'This set of clothes is designed specifically to be expensive and to show it, including fancy, tailored clothes in whatever fashion happens to be the current style in the courts of the nobles.Precious metals and gems could be worked into the clothing.',
      imgPath: 'traveler.png'
    };

    this.TrendingClothes.push(common);
    this.TrendingClothes.push(fine);
    this.TrendingClothes.push(travelers);
  }

  GenerateClothes(){
    var artisan: Clothes = {
      name: "Artisan's Clothing",
      rating: 4,
      originalPrice: 2,
      price: 1,
      currencyTypeAbbreviation: 'gp',
      description: 'This outfit includes a shirt with buttons, a skirt or pants with a drawstring, shoes, and perhaps a cap or hat. It may also include a belt or a leather or cloth apron for carrying tools.',
      imgPath: 'artisans.jpg'
    };   
    
    var clerics: Clothes = {
      name: "Cleric's Vestments",
      rating: 4,
      originalPrice: 10,
      price: 5,
      currencyTypeAbbreviation: 'gp',
      description: 'These ecclesiastical clothes are for performing priestly functions, not for adventuring.',
      imgPath: 'clerics.jpg'
    };
    var entertainers: Clothes = {
      name: "Entertainer's Outfit",
      rating: 3,
      originalPrice: 4,
      price: 3,
      currencyTypeAbbreviation: 'gp',
      description: 'This set of flashy, perhaps even gaudy, clothes is for entertaining. While the outfit looks whimsical, its practical design lets you tumble, dance, walk a tightrope, or just run (if the audience turns ugly).',
      imgPath: 'entertainers.jpg'
    };   
    
    var explorer: Clothes = {
      name: "Explorer's Clothing",
      rating: 5,
      originalPrice: 12,
      price: 15,
      currencyTypeAbbreviation: 'gp',
      description: 'This is a full set of clothes for someone who never knows what to expect. It includes sturdy boots, leather breeches or a skirt, a belt, a shirt (perhaps with a vest or jacket), gloves, and a cloak. Rather than a leather skirt, a leather overtunic may be worn over a cloth skirt. The clothes have plenty of pockets (especially the cloak). The outfit also includes any extra items you might need, such as a scarf or a wide-brimmed hat.',
      imgPath: 'explorer.jpg'
    };

    var monk: Clothes = {
      name: "Monk's Clothing",
      rating: 2,
      originalPrice: 6,
      price: 5,
      currencyTypeAbbreviation: 'gp',
      description: 'This simple outfit includes sandals, loose breeches, and a loose shirt, and is all bound together with sashes. The outfit is designed to give you maximum mobility, and it’s made of high-quality fabric. You can hide small weapons in pockets hidden in the folds, and the sashes are strong enough to serve as short ropes.',
      imgPath: 'monk.jpg'
    };

    var nobel: Clothes = {
      name: "Noble Clothing",
      rating: 5,
      originalPrice: 80,
      price: 75,
      currencyTypeAbbreviation: 'gp',
      description: 'This set of clothes is designed specifically to be expensive and to show it. Precious metals and gems are worked into the clothing. To fit into the noble crowd, every would-be noble also needs a signet ring and jewelry (worth at least 100 gp).',
      imgPath: 'noble.jpg'
    };

    var peasant: Clothes = {
      name: "Peasant's Clothing",
      rating: 1,
      originalPrice: 2,
      price: 1,
      currencyTypeAbbreviation: 'sp',
      description: 'This set of clothes consists of a loose shirt and baggy breeches, or a loose shirt and skirt or overdress. Cloth wrappings are used for shoes.',
      imgPath: 'peasant.jpg'
    };

    var scholars: Clothes = {
      name: "Scholars's Clothing",
      rating: 2,
      originalPrice: 8,
      price: 5,
      currencyTypeAbbreviation: 'gp',
      description: 'Perfect for a scholar, this outfit includes a robe, a belt, a cap, soft shoes, and possibly a cloak.',
      imgPath: 'scholar.jpg'
    };
    

    this.Clothes.push(artisan);
    this.Clothes.push(clerics);
    this.Clothes.push(entertainers);
    this.Clothes.push(explorer);
    this.Clothes.push(monk);
    this.Clothes.push(nobel);
    this.Clothes.push(peasant);
    this.Clothes.push(scholars);
  }

  GenerateSpecials(){
    var currencyType: CurrencyType = {id: 0, name: "Gold", abbreviation: "gp", copperConversion: "1000"};

    if(this.CityId == 12){ //Sonridge
      this.Special ={name: "Masquerade Wear", price: 20}
      this.SpecialImg = ["masquerade mens", "masquerade womens"];
    } else if(this.CityId == 23) //Blackstone
    {
      this.Special ={name: "Wood Elf Wear", price: 10}
      this.SpecialImg = ["forest mens", "forest womens"];
    } else if (this.CityId == 9) {//Arynsport 
      this.Special ={name: "Sailors Clothing", price: 10}
      this.SpecialImg = ["pirates mens", "pirates womens"];
    }
    else {
      this.Special ={name: "Peasant's Outfit", price: 100000}
    }
  }
}

export interface Special {
  name: string;
  price: number;
}

export interface Clothes {
  name: string;
  rating: number;
  originalPrice: number;
  price: number;
  currencyTypeAbbreviation: string;
  description: string;
  imgPath: string;

}
