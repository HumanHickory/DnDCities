import { Spell } from "./Spell";
import { CurrencyType } from "./Weapon";

export interface SpellScroll {
    id: number;
    cityId: number;
    spellId: number;
    price: number;
    currencyTypeId: number;

    currencyType: CurrencyType;
    spell: Spell;
}