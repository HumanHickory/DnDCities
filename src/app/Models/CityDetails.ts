import { ColorScheme } from "./ColorScheme";
import { Government } from "./Government";
import { Help } from "./Help";
import { News } from "./News";
import { Shop } from "./Shop";

export interface CityDetails{
    id: number;
    cityId: number;
    motto: string;
    name: string;
    news: News[];
    help: Help[];
    history: string;
    magicIdeology: string;
    colorScheme: ColorScheme;
    government: Government;

    shops: Shop[];
    tavernName: string;
  }
  

  
