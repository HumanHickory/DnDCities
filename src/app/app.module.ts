import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularEditorModule } from '@kolkov/angular-editor';

import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {InputNumberModule} from 'primeng/inputnumber';
import {ListboxModule} from 'primeng/listbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './Views/Cities/city/city.component';
import { TownComponent } from './Views/Cities/town/town.component';
import { VillageComponent } from './Views/Cities/village/village.component';
import { CityDirectoryComponent } from './Views/Directories/city-directory/city-directory.component';
import { ShopDirectoryComponent } from './Views/Directories/shop-directory/shop-directory.component';
import { TavernComponent } from './Views/Taverns/tavern/tavern.component';
import { EpicFlailComponent } from './Views/Stores/epic-flail/epic-flail.component';
import { EyeOfTheBeholderComponent } from './Views/Stores/eye-of-the-beholder/eye-of-the-beholder.component';
import { RicochetArmamentsComponent } from './Views/Stores/ricochet-armaments/ricochet-armaments.component';
import { GnomeDepotComponent } from './Views/Stores/gnome-depot/gnome-depot.component';
import { NewsComponent } from './Views/CityComponents/news/news.component';
import { HIstoryComponent } from './Views/CityComponents/history/history.component';
import { GovernmentComponent } from './Views/CityComponents/government/government.component';
import { HelpWantedComponent } from './Views/CityComponents/help-wanted/help-wanted.component';
import { FiveFingersComponent } from './Views/Stores/five-fingers/five-fingers.component';
import { VictoriousSecretComponent } from './Views/Stores/victorious-secret/victorious-secret.component';
import { OutsideTheBachComponent } from './Views/Stores/outside-the-bach/outside-the-bach.component';
import { NavBarComponent } from './Views/Nav/nav-bar/nav-bar.component';
import { BitsAndPiecesComponent } from './Views/Stores/bits-and-pieces/bits-and-pieces.component';
import { UnderdarkComponent } from './Views/Cities/underdark/underdark.component';
import { ManageComponent } from './Views/Admin/manage/manage.component';
import { ZimzamkatanComponent } from './Views/Stores/zimzamkatan/zimzamkatan.component';
import { DivineRiteAidComponent } from './Views/Stores/divine-rite-aid/divine-rite-aid.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    TownComponent,
    VillageComponent,
    CityDirectoryComponent,
    ShopDirectoryComponent,
    TavernComponent,
    EpicFlailComponent,
    EyeOfTheBeholderComponent,
    RicochetArmamentsComponent,
    GnomeDepotComponent,
    NewsComponent,
    HIstoryComponent,
    GovernmentComponent,
    HelpWantedComponent,
    FiveFingersComponent,
    VictoriousSecretComponent,
    OutsideTheBachComponent,
    NavBarComponent,
    BitsAndPiecesComponent,
    UnderdarkComponent,
    ManageComponent,
    ZimzamkatanComponent,
    DivineRiteAidComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxPageScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularEditorModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    InputTextareaModule,
    ButtonModule,
    DialogModule,
    ColorPickerModule,
    CarouselModule,
    ToastModule,
    CardModule,
    AccordionModule,
    TableModule,
    RatingModule,
    DropdownModule,
    ProgressSpinnerModule,
    InputNumberModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
