import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Views/Admin/create/create.component';
import { WeaponsComponent } from './Views/Admin/weapons/weapons.component';
import { CityComponent } from './Views/Cities/city/city.component';
import { TownComponent } from './Views/Cities/town/town.component';
import { VillageComponent } from './Views/Cities/village/village.component';
import { CityDirectoryComponent } from './Views/Directories/city-directory/city-directory.component';
import { ShopDirectoryComponent } from './Views/Directories/shop-directory/shop-directory.component';
import { BitsAndPiecesComponent } from './Views/Stores/bits-and-pieces/bits-and-pieces.component';
import { EpicFlailComponent } from './Views/Stores/epic-flail/epic-flail.component';
import { EyeOfTheBeholderComponent } from './Views/Stores/eye-of-the-beholder/eye-of-the-beholder.component';
import { FiveFingersComponent } from './Views/Stores/five-fingers/five-fingers.component';
import { GnomeDepotComponent } from './Views/Stores/gnome-depot/gnome-depot.component';
import { OutsideTheBachComponent } from './Views/Stores/outside-the-bach/outside-the-bach.component';
import { RicochetArmamentsComponent } from './Views/Stores/ricochet-armaments/ricochet-armaments.component';
import { VictoriousSecretComponent } from './Views/Stores/victorious-secret/victorious-secret.component';
import { TavernComponent } from './Views/Taverns/tavern/tavern.component';

const routes: Routes = [
  {path: '', component: CityDirectoryComponent},
  {path: 'Shops/:cityId', component: ShopDirectoryComponent},
  {path: 'City/:cityId', component: CityComponent},
  {path: 'Town/:cityId', component: TownComponent},
  {path: 'Village/:cityId', component: VillageComponent},
  {path: 'Admin/Create/:cityId', component: CreateComponent},
  {path: 'Admin/Weapons/:weaponId', component: WeaponsComponent},
  
  {path: 'Stores/EpicFlail/:cityId/:cityName', component: EpicFlailComponent},
  {path: 'Stores/EyeOfTheBeholder/:cityId/:cityName', component: EyeOfTheBeholderComponent},
  {path: 'Stores/RicochetArmaments/:cityId/:cityName', component: RicochetArmamentsComponent},
  {path: 'Stores/GnomeDepot/:cityId/:cityName', component: GnomeDepotComponent},
  {path: 'Stores/FiveFingers/:cityId/:cityName', component: FiveFingersComponent},
  {path: 'Stores/VictoriousSecret/:cityId/:cityName', component: VictoriousSecretComponent},
  {path: 'Stores/OutsideTheBach/:cityId/:cityName', component: OutsideTheBachComponent},
  {path: 'Stores/BitsandPieces/:cityId/:cityName', component: BitsAndPiecesComponent},

  {path: 'Tavern/:cityId/:cityName', component: TavernComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
