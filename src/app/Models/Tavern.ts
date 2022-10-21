import { CurrencyPipe } from "@angular/common";
import { CurrencyType } from "./Weapon";

export interface Tavern{
    id: number;
    name: string;
    cityId: number;

    drinks: Drink[]
    recipes: TavernRecipe[];
    menuItemTypes: MenuItemType[];
}

export interface TavernRecipe{
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

export interface Drink{
    id: number;
    name: string;
    description: string;
    price: number;
    currencyTypeId: number;
    createdCity: string;
    drinkType: string;

    currencyType: CurrencyType;
}