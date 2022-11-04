import { ColorScheme } from "./ColorScheme";
import { Government } from "./Government";
import { Help } from "./Help";
import { History } from "./History";
import { News } from "./News";
import { Shop } from "./Shop";

export interface CityDetails{
    id: number;
    cityId: number;
    motto: string;
    name: string;
    news: News[];
    help: Help[];
    history: History;
    magicIdeology: string;
    colorScheme: ColorScheme;
    government: Government;

    shops: Shop[];
    tavernName: string;
  }
  

  
