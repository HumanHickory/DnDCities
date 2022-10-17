export interface Weapon {
    id: number;
    name: string;
    damageDTypeId: number;
    price: number;
    currencyTypeId: number;
    weight: number;
    weaponTypeId: number;
    numberOfDamageDice: number;
    damageDice: number;  

    damageType: DamageType;
    currencyType:CurrencyType;
    weaponType:WeaponType;
    properties:WeaponsProperty[];
}

export interface ExclusiveWeapon {
    id: number;
    name: string;
    damageTypeId: number;
    price: number;
    currencyTypeId: number;
    weight: number;
    weaponTypeId: number;
    numberOfDamageDice: number;
    damageDice: number;  

    cityId: number;
    special: string;

    damageDiceConcat: string;

    damageType: DamageType;
    currencyType:CurrencyType;
    weaponType:WeaponType;
    properties:WeaponsProperty[];
}

export interface DamageType{
    id: number;
    name: string;
}

export interface CurrencyType{
    id: number;
    name: string;
    abbreviation: string;
    copperConversion: string;
}

export interface WeaponType{
    id: number;
    name: string;
}

export interface WeaponsProperty{
    id: number;
    name: string;
    description: string;
}