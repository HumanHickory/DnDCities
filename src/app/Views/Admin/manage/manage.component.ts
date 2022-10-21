import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Drink, MenuItemType, TavernRecipe } from 'src/app/Models/Tavern';
import { TavernService } from 'src/app/Services/Tavern/TavernService';
import { Campaign, CampaignLocation } from 'src/app/Models/Campaign';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [CityService, MessageService, ShopService, TypeService, TavernService]

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
  Recipes: TavernRecipe[] = [];
  MenuItemTypes: MenuItemType[] = [];
  Drinks: Drink[] = [];
  SelectedDrinks: Drink[] = [];
  Campaigns: Campaign[] = [];
  SelectedCampaigns: Campaign[] = [];

  NewNews: News;
  NewHelp: Help;
  NewDrink: Drink;

  ShowNewsDialog: boolean = false;
  ShowHelpDialog: boolean = false;
  ShowDrinkDialog: boolean = false;
  ShowBitsAndPieces: boolean = false;
  ShowExclusiveWeapons: boolean = false;
  ShowExclusiveItems: boolean = false;


  constructor(private cityService: CityService,
    private messageService: MessageService,
    private shopService: ShopService,
    private tavernService: TavernService,
    private activatedRoute: ActivatedRoute,
    private library: FaIconLibrary,
    private typeService: TypeService,
    private router: Router
  ) {
    library.addIconPacks(fas);

  }

  async ngOnInit(): Promise<any> {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    await this.ListDrinks();
    await this.ListCurrencyTypes();
    await this.GetCitySizes();
    await this.ListShops();
    await this.GetCampaigns();
    await this.GetMenuItemTypes();
    await this.GetLocations(cityId);
    this.SetModel();

  }

  async GetCampaigns(){
    this.cityService.ListCampaigns().subscribe(campaigns => {
      this.Campaigns = campaigns;
    });
  }

  async GetLocations(cityId: number) {
    this.cityService.GetLocations(0).subscribe(cities => {
      this.Cities = cities;
      if (cityId > 0) {
        this.SetCity(cityId);
      }
    });
  }

  async GetCitySizes() {
    this.cityService.GetCitySizes().subscribe(citySizes => {
      this.Sizes = citySizes;
    });
  }

  async ListShops() {
    this.shopService.ListShops().subscribe(shops => {
      this.Shops = shops.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  async GetMenuItemTypes() {
    if (this.MenuItemTypes.length == 0) {
      this.typeService.ListMenuItemTypes().subscribe(menuTypes => {
        this.MenuItemTypes = menuTypes;
      });
    }
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


  async ListCurrencyTypes() {
    if (this.CurrencyTypes.length == 0) {
      this.typeService.ListCurrencyTypes().subscribe(currencyTypes => {
        this.CurrencyTypes = currencyTypes
      });
    }
  }

  AddNewRecipe() {


    var recipe: TavernRecipe = {
      id: 0,
      name: "",
      description: "",
      tavernId: 0,
      price: 0,
      currencyTypeId: 0,
      menuItemTypeId: 0,

      currencyType: null,
      menuItemType: null,
    }

    this.Recipes.push(recipe);

  }

  AddNewSpecialityItem() {


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

        this.tavernService.GetTavern(this.CityDetails.cityId).subscribe(tavern => {

          if (this.Recipes.length > 0) {
            this.Recipes.forEach(x => {
              x.tavernId = tavern.id
            });
            tavern.recipes = this.Recipes;
          }

          if (this.SelectedDrinks.length > 0) {
            tavern.drinks = this.SelectedDrinks;
          }

          this.tavernService.AddTavernDetails(tavern).subscribe(result => {
            this.messageService.add({ severity: 'success', summary: 'Saved Tavern Details', detail: 'Tavern Details were successfully saved' });

          },
            error => {
              this.messageService.add({ severity: 'error', summary: 'Failed to Save Tavern Details', detail: 'Unable to save Tavern Details' });
            });
        });

        var campLocations: CampaignLocation[] = [];

        this.Campaigns.forEach(x => {
          var show = false;
          if(this.SelectedCampaigns.includes(x))
            show = true;
          var newCampLoc: CampaignLocation = {
            id: 0,
            campaignId: x.id,
            cityId: this.CityDetails.cityId,
            show: show
          }
          campLocations.push(newCampLoc);
        });

        this.cityService.SetCampaignLocation(campLocations).subscribe(result =>{});

        this.messageService.add({ severity: 'success', summary: 'Saved City', detail: 'City and Details were successfully saved' });
        this.router.navigate(['/Admin/Manage/' + this.CityDetails.cityId]);
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

  OpenDrinkDialog() {
    this.NewDrink = {
      id: 0,
      name: "",
      createdCity: "",
      description: "",
      price: 0,
      currencyTypeId: 0,
      drinkType: "",

      currencyType: null
    }

    this.ShowDrinkDialog = true;

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

    this.ResetNewsHelpDrinks();
    this.AllDataFetched = true;
  }

  ResetNewsHelpDrinks() {
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

    this.NewDrink = {
      id: 0,
      name: "",
      createdCity: "",
      description: "",
      price: 0,
      currencyTypeId: 0,
      drinkType: "",

      currencyType: null
    }
  }

  GetTavern(cityId: number) {
    this.tavernService.GetTavern(cityId).subscribe(tavern => {
      this.SelectedDrinks = tavern.drinks;
      this.SelectedDrinks.forEach(x => {
        x.currencyType = null,
          x.currencyTypeId = 0,
          x.price = 0
      });
      this.Recipes = tavern.recipes;
    });
  }

  SetCity(cityId: number) {
    this.cityService.GetLocation(cityId, 0).subscribe(details => {
      this.CityDetails = details;
      if (this.CityDetails.shops.length > 0) {
        this.UpdateShop();
      }

      this.GetTavern(cityId);

      this.cityService.GetLocationBasic(cityId).subscribe(details => {
        this.City = details;
        this.ResetNewsHelpDrinks();
        this.GetCampaignLocations();
        this.CityDetails.shops.some(shop => {
          if (shop.name.toLowerCase() == "bits and pieces") {
            this.GetMountsByCityId();
          }
        });
        this.AllDataFetched = true;
      });

    });
  }

  GetCampaignLocations(){
    this.cityService.GetCampaignLocation(this.City.id).subscribe(campLocs => {
      var camps: Campaign[] = [];
      this.SelectedCampaigns = [];
      campLocs.forEach(x => {
        if(x.show){
          camps.push(this.Campaigns.find(c => c.id === x.campaignId)); //no, it won't work if you put selectedCampaigns here. Bullshit.
        }
      });

      this.SelectedCampaigns = camps;
    });
  }


  GetMountsByCityId() {
    this.shopService.GetMountsByCityId(this.City.id).subscribe(mounts => {
      this.SelectedMounts = mounts;
    });
  }

  async ListDrinks() {
    this.tavernService.ListDrinks().subscribe(drinks => {
      this.Drinks = drinks.sort((a, b) => {
        const nameA = a.createdCity.toUpperCase(); // ignore upper and lowercase
        const nameB = b.createdCity.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    });
  }

  AddDrink() {
    this.tavernService.AddDrink(this.NewDrink).subscribe(drink => {
      if (drink.id != 0) {
        this.ListDrinks();
        this.ShowDrinkDialog = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'This drink alredy exists!', detail: 'Did not save.' });

      }
    });
  }

}
