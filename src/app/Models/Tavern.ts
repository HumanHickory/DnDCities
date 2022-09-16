import { CurrencyPipe } from "@angular/common";
import { CurrencyType } from "./Weapon";

export interface Tavern{
    id: number;
    name: string;
    cityId: number;

    drinks: Drinks[]
    recipes: TavernRecipes[];
    menuItemTypes: MenuItemType[];
}

export interface TavernRecipes{
    id: number;
    name: string;
    tavernId: number;
    description: string;
    price: number;
    currencyTypeId: number;
    menuItemTypeId: number;

    currencyType: CurrencyType;
    menuItemType:MenuItemType;
}

export interface MenuItemType{
    id: number;
    name: string;
}

export interface Drinks{
    id: number;
    name: string;
    description: string;
    price: number;
    currencyTypeId: number;
    createdCity: string;
    drinkType: string;

    currencyType: CurrencyType;
}