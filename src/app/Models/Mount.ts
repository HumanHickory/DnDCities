import { CurrencyType } from "./Weapon";

export interface Mount{
    id: number;
    name: string;
    price: number;
    currencyTypeId: number;
    capacity: number;
    speed: number;
    isWaterborne: boolean;
    
    currencyType: CurrencyType;
}