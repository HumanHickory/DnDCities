import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './Views/Admin/manage/manage.component';
import { CityComponent } from './Views/Cities/city/city.component';
import { TownComponent } from './Views/Cities/town/town.component';
import { UnderdarkComponent } from './Views/Cities/underdark/underdark.component';
import { VillageComponent } from './Views/Cities/village/village.component';
import { CityDirectoryComponent } from './Views/Directories/city-directory/city-directory.component';
import { ShopDirectoryComponent } from './Views/Directories/shop-directory/shop-directory.component';
import { BitsAndPiecesComponent } from './Views/Stores/bits-and-pieces/bits-and-pieces.component';
import { DivineRiteAidComponent } from './Views/Stores/divine-rite-aid/divine-rite-aid.component';
import { EpicFlailComponent } from './Views/Stores/epic-flail/epic-flail.component';
import { EyeOfTheBeholderComponent } from './Views/Stores/eye-of-the-beholder/eye-of-the-beholder.component';
import { FiveFingersComponent } from './Views/Stores/five-fingers/five-fingers.component';
import { GnomeDepotComponent } from './Views/Stores/gnome-depot/gnome-depot.component';
import { OutsideTheBachComponent } from './Views/Stores/outside-the-bach/outside-the-bach.component';
import { RicochetArmamentsComponent } from './Views/Stores/ricochet-armaments/ricochet-armaments.component';
import { VictoriousSecretComponent } from './Views/Stores/victorious-secret/victorious-secret.component';
import { ZimzamkatanComponent } from './Views/Stores/zimzamkatan/zimzamkatan.component';
import { TavernComponent } from './Views/Taverns/tavern/tavern.component';

const routes: Routes = [
  {path: '', component: CityDirectoryComponent},
  {path: 'Shops/:cityId', component: ShopDirectoryComponent},
  {path: 'City/:cityId', component: CityComponent},
  {path: 'Town/:cityId', component: TownComponent},
  {path: 'Village/:cityId', component: VillageComponent},
  {path: 'Underdark/:cityId', component: UnderdarkComponent},
  {path: 'Admin/Manage', component: ManageComponent},
  {path: 'Admin/Manage/:cityId', component: ManageComponent},
  
  {path: 'Stores/EpicFlail/:cityId/:cityName', component: EpicFlailComponent},
  {path: 'Stores/EyeOfTheBeholder/:cityId/:cityName', component: EyeOfTheBeholderComponent},
  {path: 'Stores/RicochetArmaments/:cityId/:cityName', component: RicochetArmamentsComponent},
  {path: 'Stores/GnomeDepot/:cityId/:cityName', component: GnomeDepotComponent},
  {path: 'Stores/FiveFingers/:cityId/:cityName', component: FiveFingersComponent},
  {path: 'Stores/VictoriousSecret/:cityId/:cityName', component: VictoriousSecretComponent},
  {path: 'Stores/OutsideTheBach/:cityId/:cityName', component: OutsideTheBachComponent},
  {path: 'Stores/BitsandPieces/:cityId/:cityName', component: BitsAndPiecesComponent},
  {path: 'Stores/Zimzamkatan/:cityId/:cityName', component: ZimzamkatanComponent},
  {path: 'Stores/DivineRiteAid/:cityId/:cityName', component: DivineRiteAidComponent},

  {path: 'Tavern/:cityId/:cityName', component: TavernComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
