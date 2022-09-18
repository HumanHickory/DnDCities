export interface Spell{
    id: number;
    name: string;
    spellLevel: number;
    schoolId: number;
    schoolName: string;
    isVerbal: boolean;
    isSomatic: boolean;
    isMaterial: boolean;
    materialComponent: string;
    levelName: string;
    castingTime: string;
    duration: string;
    range: string;
    attackSave: string;
    damgeType: string;
    damageTypeId: number;
    description: string;
    isRitual: boolean;
    isConcentration: boolean;
    target: string;
    dnDBeyondLink: string;
}