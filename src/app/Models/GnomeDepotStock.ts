import { Item } from "./Item";
import { Pack } from "./Pack";

export interface GnomeDepotStock{
    packs: Pack[];
    wildernessSurvival: Item[];
    generalSupplies: Item[];
    storageSolutions: Item[];
    tools: Item[];
}