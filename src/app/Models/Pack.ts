import { CurrencyType } from "./Weapon";

export interface Pack{
    id: number;
    name: string;
    price: number;
    currencyTypeId: number;
    weight: number;

    notes: string;
    rating: number;
    currencyType: CurrencyType;
    ratingCount: number;
}

export interface PackContents{
    id: number;
    packId: number;
    itemId: number;
    quantity: number;

    itemName: number;
}


