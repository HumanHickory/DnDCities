import { Item } from "./Item";
import { CurrencyType } from "./Weapon";

export interface ShopSpecial{
    id: number;
    cityId: number;
    shopId: number
    isActive: boolean;
    available: number;

    item: Item;
}