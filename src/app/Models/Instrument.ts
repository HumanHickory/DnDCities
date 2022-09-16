import { CurrencyType } from "./Weapon";

export interface Instrument {
    id: number;
    name: string;
    price: number;
    currencyTypeId: number;
    weight: number;
    description: string;
    
    currencyType: CurrencyType;
}