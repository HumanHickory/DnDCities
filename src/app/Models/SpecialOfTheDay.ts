import { CurrencyType } from "./Weapon";

export interface SpecialOfTheDay{
    id: number;
    cityId: number;
    name: string;
    descriptionHtml: string;
    weight: number;
    price: number;
    currencyTypeId: number;
    isActive: boolean;

    currencyType:CurrencyType;
}