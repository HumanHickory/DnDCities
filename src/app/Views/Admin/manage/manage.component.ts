import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLeaf, fas } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { City } from 'src/app/Models/City';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CitySize } from 'src/app/Models/CitySize';
import { Help } from 'src/app/Models/Help';
import { News } from 'src/app/Models/News';
import { Shop } from 'src/app/Models/Shop';
import { Item, Rarity } from 'src/app/Models/Item';
import { ShopSpecial } from 'src/app/Models/ShopSpecial';
import { CityService } from 'src/app/Services/Cities/CityService';
import { ShopService } from 'src/app/Services/Shops/ShopService';
import { CurrencyType, DamageType, ExclusiveWeapon, WeaponsProperty, WeaponType } from 'src/app/Models/Weapon';
import { TypeService } from 'src/app/Services/Common/TypeService';
import { Mount } from 'src/app/Models/Mount';
import { CityMount } from 'src/app/Models/CityMount';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [CityService, MessageService, ShopService, TypeService]

})
export class ManageComponent implements OnInit {
  Sizes: CitySize[] = [];
  CitySize: CitySize;
  City: City;
  CityDetails: CityDetails;
  AllDataFetched: boolean = false;
  Cities: City[] = [];
  Shops: Shop[] = [];
  ExclusiveItems: ShopSpecial[] = [];
  ExclusiveWeapons: ExclusiveWeapon[] = [];
  CurrencyTypes: CurrencyType[] = [];
  RarityTypes: Rarity[] = [];
  Mounts: Mount[] = [];
  SelectedMounts: Mount[] = [];
  WeaponsProperties: WeaponsProperty[] = [];
  DamageTypes: DamageType[] = [];
  WeaponTypes: WeaponType[] = [];
  SpecialtyItemStores: Shop[] = [];

  NewNews: News;
  NewHelp: Help;

  ShowNewsDialog: boolean = false;
  ShowHelpDialog: boolean = false;
  ShowBitsAndPieces: boolean = false;
  ShowExclusiveWeapons: boolean = false;
  ShowExclusiveItems: boolean = false;


  constructor(private cityService: CityService,
    private messageService: MessageService,
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private library: FaIconLibrary,
    private typeService: TypeService,
  ) {
    library.addIconPacks(fas);

  }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.cityService.GetLocations().subscribe( cities => {
      this.Cities = cities;
      if (cityId > 0) { this.SetCity(cityId); } 
      this.cityService.GetCitySizes().subscribe(citySizes => { 
        this.Sizes = citySizes;
        this.shopService.ListShops().subscribe(shops => {
          this.Shops = shops.sort((a, b) => a.name.localeCompare(b.name));
          this.SetModel();
        });
      });

    });
  }

  UpdateShop() {
    var shops = this.CityDetails.shops;
    this.SpecialtyItemStores = [];

    shops.some(shop => {
      if (shop.name.toLowerCase() == "epic flail" && this.ExclusiveWeapons.length == 0) {
        this.ShowExclusiveWeapons = true;
      } else if (shop.name.toLowerCase() == "bits and pieces") {
        this.shopService.ListMounts().subscribe(mounts => {
          this.Mounts = mounts.sort((a, b) => a.name.localeCompare(b.name));
        });
        this.ShowBitsAndPieces = true;
      } else if ((shop.name.toLowerCase() == "gnome depot" || shop.name.toLowerCase() == "five fingers" || shop.name.toLowerCase() == "eye of the beholder")) {
        if (this.ExclusiveItems.length == 0)
        this.SpecialtyItemStores.push(shop);
        this.ShowExclusiveItems = true;
      }
    });
  }

  AddNewSpecialityItem() {
    if (this.CurrencyTypes.length == 0) {
      this.typeService.ListCurrencyTypes().subscribe(currencyTypes => {
        this.CurrencyTypes = currencyTypes
      });
    }

    if (this.RarityTypes.length == 0) {
      this.typeService.ListRarity().subscribe(rarityTypes => {
        this.RarityTypes = rarityTypes;
      });
    }

    var item: Item = {
      id: 0,
      name: "",
      description: "",
      weight: 0,
      price: 0,
      currencyTypeId: 0,
      isMagical: false,
      requiresAttunement: false,
      rarityId: 0,
      currencyType: null,
      rarity: null
    }

    var ShopExclusive: ShopSpecial = {
      id: 0,
      cityId: this.City.id,
      shopId: 0,
      isActive: true,
      available: 0,
      item: item
    }

    this.ExclusiveItems.push(ShopExclusive);
  }

  AddNewExclusiveWeapon() {
    if (this.CurrencyTypes.length == 0) {
      this.typeService.ListCurrencyTypes().subscribe(currencyTypes => {
        this.CurrencyTypes = currencyTypes
      });
    }

    if (this.WeaponTypes.length == 0) {
      this.typeService.ListWeaponTypes().subscribe(types => {
        this.WeaponTypes = types
      });
    }

    if (this.WeaponsProperties.length == 0) {
      this.typeService.ListWeaponsProperties().subscribe(types => {
        this.WeaponsProperties = types
      });
    }

    if (this.DamageTypes.length == 0) {
      this.typeService.ListDamageTypes().subscribe(types => {
        this.DamageTypes = types
      });
    }

    var weapon: ExclusiveWeapon = {
      id: 0,
      name: "",
      weight: 0,
      price: 0,
      currencyTypeId: 0,
      currencyType: null,
      damageTypeId: 0,
      damageType: null,
      weaponTypeId: 0,
      weaponType: null,
      numberOfDamageDice: 0,
      damageDice: 0,
      special: "",
      properties: null,
      cityId: 0,
      damageDiceConcat: "1d4"
    }

    this.ExclusiveWeapons.push(weapon);
  }

  Save() {
    this.cityService.CreateOrUpdateLocation(this.City).subscribe(cityIdStr => {
      var cityId = parseInt(cityIdStr);
      this.CityDetails.cityId = cityId;
      this.CityDetails.colorScheme.cityId = cityId;
      this.CityDetails.government.cityId = cityId;

      this.CityDetails.news.forEach(x => {
        x.cityId = cityId
      });

      this.CityDetails.help.forEach(x => {
        x.cityId = cityId
      });

      this.ExclusiveItems.forEach(x => {
        x.cityId = cityId
      });

      this.ExclusiveWeapons.forEach(x => {
        x.cityId = cityId,
          x.numberOfDamageDice = +x.damageDiceConcat.split("d")[0];
        x.damageDice = +x.damageDiceConcat.split("d")[1];
      });

      var cityMounts: CityMount[] = [];
      this.SelectedMounts.forEach(x => {
        var newMount: CityMount = {
          cityId: cityId,
          mountId: x.id,
          id: 0,
          mount: null
        }

        cityMounts.push(newMount);
      });

      if (this.City.name.includes("'")) {
        var cityName = this.City.name;
        cityName.replace("'", "/'");
        this.City.pathName = cityName;
      } else {
        this.City.pathName = this.City.name;
      }

      this.cityService.CreateOrUpdateLocationDetails(this.CityDetails).subscribe(cityId => {

        if (this.SelectedMounts.length > 0) {
          this.shopService.AddMountsToCity(cityMounts).subscribe(worked => { },
            error => {
              this.messageService.add({ severity: 'error', summary: 'Failed to save mounts', detail: 'Unable to save mounts' });
            });
        }

        if (this.ExclusiveWeapons.length > 0) {
          this.shopService.AddExclusiveWeapons(this.ExclusiveWeapons).subscribe(weapons => { },
            error => {
              this.messageService.add({ severity: 'error', summary: 'Failed to save weapons', detail: 'Unable to save weapons' });
            });
        }

        if (this.ExclusiveItems.length > 0) {
          this.shopService.AddShopSpecials(this.ExclusiveItems).subscribe(specials => { },
            error => {
              this.messageService.add({ severity: 'error', summary: 'Failed to save weapons', detail: 'Unable to save weapons' });
            });
        }

        this.messageService.add({ severity: 'success', summary: 'Saved City', detail: 'City and Details were successfully saved' });
      },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Failed to Save Details', detail: 'Unable to save details' });
        });
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Failed to Save City', detail: 'Unable to save city' });
      });
  }

  OpenNewsDialog() {
    this.NewNews = {
      id: 0,
      cityId: this.City.id,
      title: "",
      source: "",
      author: "",
      storyHtml: "",
    }

    this.ShowNewsDialog = true;
  }

  OpenHelpDialog() {
    this.NewHelp = {
      id: 0,
      cityId: this.City.id,
      title: "",
      detailsHtml: ""
    }

    this.ShowHelpDialog = true;
  }

  AddNews() {
    this.CityDetails.news.push(this.NewNews);
    this.ShowNewsDialog = false;
    this.CityDetails.news = [...this.CityDetails.news];
  }

  AddHelp() {
    this.CityDetails.help.push(this.NewHelp);
    this.ShowHelpDialog = false;
    this.CityDetails.help = [...this.CityDetails.help];
  }

  SetModel() {
    this.City = {
      id: 0,
      name: "",
      area: "",
      size: "",
      sizeId: 0,
      show: true,
      pathName: ""
    }

    var Government = {
      title: "",
      descriptionHtml: "",
      id: 0,
      cityId: this.City.id
    }

    var ColorScheme = {
      id: 0,
      cityId: this.City.id,
      backgroundColor: '#000',
      primaryColor: "#000",
      navColor: "#000",
      primaryTextColor: "#000",
      headerTextColor: "#000"
    }


    this.CityDetails = {
      motto: "",
      name: this.City.name,
      id: 0,
      cityId: this.City.id,
      history: "",
      magicIdeology: "",
      news: [],
      help: [],
      colorScheme: ColorScheme,
      government: Government,
      shops: [],
      tavernName: ""
    }

    this.ResetNewsAndHelp();
    this.AllDataFetched = true; 
  }

  ResetNewsAndHelp() {
    this.NewHelp = {
      id: 0,
      cityId: this.City.id,
      title: "",
      detailsHtml: ""
    }

    this.NewNews = {
      id: 0,
      cityId: this.City.id,
      title: "",
      source: "",
      author: "",
      storyHtml: "",
    }
  }

  SetCity(cityId: number) {
    this.cityService.GetLocation(cityId).subscribe(details => {
      this.CityDetails = details;
      if(this.CityDetails.shops.length > 0){
        this.UpdateShop();
      }

      this.cityService.GetLocationBasic(cityId).subscribe(details => {
        this.City = details;
        this.ResetNewsAndHelp();
        this.CityDetails.shops.some(shop => {
          if (shop.name.toLowerCase() == "bits and pieces") {
            this.GetMountsByCityId();
          }
        });
        this.AllDataFetched = true;
      });

    });


  }

  GetMountsByCityId(){
    this.shopService.GetMountsByCityId(this.City.id).subscribe(mounts => {
      this.SelectedMounts = mounts;
    });
  }

}
