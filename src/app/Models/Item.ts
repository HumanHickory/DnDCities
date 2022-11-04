import { CurrencyType } from "./Weapon";

export interface Item{
    id: number;
    name: string;
    description: string;
    weight: number;
    price: number;
    currencyTypeId: number;
    isMagical: boolean;
    requiresAttunement: boolean;
    rarityId: number;

    currencyType: CurrencyType;
    rarity: Rarity;
    fullPrice: string;
}

export interface Rarity{
    id: number;
    name: string;
}