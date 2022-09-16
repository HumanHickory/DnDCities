import { HttpClient, HttpParams } from "@angular/common/http";
import { CityDetails } from "src/app/Models/CityDetails";
import { CitySize } from "src/app/Models/CitySize";
import { City } from "src/app/Models/City";
import { ColorScheme } from "src/app/Models/ColorScheme";
import { Help } from "src/app/Models/Help";
import { News } from "src/app/Models/News";
import { Injectable } from '@angular/core';

@Injectable()
export class CityService {
    News: News[] = [];
    Help: Help[] = [];
    urlBase = "https://localhost:44350/";

    constructor(private http: HttpClient) { }

    GetCitySizes(){
        return this.http.get<CitySize[]>(this.urlBase + 'api/City/GetLocationSizes')
    }

    CreateOrUpdateLocation(location: City){
        return this.http.post(this.urlBase + 'api/City/CreateOrUpdateLocation', location, {responseType: 'text'})
    }

    CreateOrUpdateLocationDetails(details: CityDetails){
        return this.http.post(this.urlBase + 'api/City/CreateOrUpdateLocationDetails', details)
    }

    GetLocations(){
        return this.http.get<City[]>(this.urlBase + 'api/City/GetLocations')
    }

    GetLocationBasic(cityId: number){
        const params = new HttpParams()
        .set('Id', cityId);
        return this.http.get<City>(this.urlBase + 'api/City/GetLocationBasic', {params})
    }

    GetLocation(cityId: number){
            const params = new HttpParams()
                .set('Id', cityId);

        return this.http.get<CityDetails>(this.urlBase + 'api/City/GetLocation', {params} );
    }

   


    // Arynsport() {
    //     var News1: News = {Id: 0,
    //         CityId: 0,
    //         Source: "Oceanview",
    //         Title: "A City Underwater",
    //         Blurb: "The city has been flooded, once again, due to chaotic magic users.",
    //         Story: ""
    //     }

    //     var News2: News = {Id: 0,
    //         CityId: 0,
    //         Source: "Admiral's Inquierer",
    //         Title: "Cursed Food?",
    //         Blurb: "Are magic users purposefully cursing our food?",
    //         Story: ""
    //     }

    //     var Help1: Help = {Id: 0,
    //         CityId: 0,
    //         Title: "Rebuilding My Home",
    //         Details: "In need of assistance rebuilding my home for my 4 young children. Husband is out at sea and cannot help.</p><p> <span class='silver'>Pay is 3sp,</span> and a place to stay whenever you need. Meet at fishing docks at dawn. Ask for Anna"
    //     }

    //     var Help2: Help = {Id: 0,
    //         CityId: 0,
    //         Title: "Fishing Crew Needed",
    //         Details: "Looking for 2 to 4 young men to help crew my ship.</p><p> <span class='silver'>Base pay is 1sp,</span> with an additional 1sp for each pound of fish we haul in. 12 hour shift. Meet at fishing docks at dawn. Ask for Oliver."
    //     }

    //     var Help3: Help = {Id: 0,
    //         CityId: 0,
    //         Title: "Adventure of a Lifetime",
    //         Details: "Admiral Glover is in search for brave men and women to embark on an adventure of a lifetime.</p><p>Have you ever wanted to be remembered as a hero? Perhaps your ambition is to be the next Master of Harbors. Or maybe you just want to see the world.Either way, join us at the Capitol anytime to see if you have what it takes to be a hero of arynsport!"
    //     }

    //     this.News.push(News1, News2);
    //     this.Help.push(Help1, Help2, Help3);

    //     var history = "<p>Arynsport is an old city that was isolated from the rest of Avyngäard due to the Storm’s Rage mountains to the east, and the Bay of One to the West.";
    //     history += "Originally named Saltwater, the village boasted a small but determined population of humans. With limited resources and no allies, the founders of Seagrass were forced to become expert";
    //     history += "fishermen and eventually, sailors. As the town grew, it soon caught the eye of an evil sorcerer who threatened to take over the town and turn it to darkness. Instead, Ayrn Silverwater,";
    //     history += "a young warrior, slayed the sorcerer. He was regarded as a hero and was elevated to King of Saltwater. Not long after, King Aryn commissioned a port and a navy to be built, and the town was renamed Arynsport.</p><p>";
    //     history += "As the port grew, so did the town and the navy. The town continued to expand north and south until the city appeared to stretch as far as the eye could see.";
    //     history += "The navy became formidable and many ships were frequently deployed to explore the oceans. During these voyages, Last Harbor and the Oyster Islands were found, and trade began.</p><p>";
    //     history += " <b>The War of 3 Seas.</b> Centuries continued on and the city was as productive as ever. One day, Damande Silverwater, the last King of Arynsport, and Princess Yrashiae of Last Harbor fell in love. Their love produced a child, ";
    //     history += "but King Virreau, the hostile, magic using patriarch of Last Harbor, would not allow his daughter to be with King Damande and produce his heir. He locked her away and forbid King Damande and his people from setting foot in Last Harbor ever again. ";
    //     history += "In a desperate attempt to rescue the woman he loved, King Damande sent a naval fleet to destroy the village on Last Harbor.Only one ship returned. Admiral Glover Smithe, Master of Harbors and Captain of the Sunken Anchor, made it back, but without the princess Yrashiae. His dwindled crew spoke of magical ships dragging their navy down to a watery grave. Admiral Glover Smithe, although reluctant, returned to duty two weeks later.</p><p>The second wave of fleets were met with ships from Seaspray, in the Oyster Islands. Their slender ships were as fast as the currents and nearly impossible to hit. Half of the King’s Navy stayed to fight the Seaspray ships. Although Seaspray’s ships were superior to the King’s Navy, they did not have the numbers, and every ship was destroyed. The armada continued on to the island town and destroyed it.The other half of the King’s Navy returned to Last Harbor. They were ambushed. The sea king of Last Harbor called upon their aquatic brethren and all manner of sea life answered their call. The fleet was forced to return to Arynsport.</p>               <p>While repairing their fleet, Arynsport was attacked by Last Harbor and Seaspray. The enemy was able to infiltrate our beloved city and corner King Damande. Only Admiral Smithe was present for the attack but was unable to defend the king. King Damande Silverwater was slain, but Admiral Smithe was able to negotiate a truce.</p>               <p>And that was the end of the War of the 3 Seas. Each city named a bay in commemoration of the war and the truce. Arynsport renamed their bay the Bay of One, while Last Harbor because the Bay of Two, and Seaspray harbors the Bay of Three. It is unclear what happened to Princess Yrashiae or the baby she carried.</p>";


    //     var City: CityDetails = {Id: 0,
    //         CityId: 0,
    //         Name: "Arynsport",
    //         Motto: "Gateway to the Sea",
    //         News: this.News,
    //         Help: this.Help,
    //         History: history,
    //         HeroImg: '../../../../assets/CityImg/PortCity.jpg'
    //     }

    //     return City;
    // }
    

    // ArynsportColorScheme() {
    //     var colors: ColorScheme = {Id: 0,
    //         CityId: 0,
    //         backgroundColor: 'white',
    //         colorA: "#064273",
    //         colorB: "#76b6c4",
    //         colorC: "#1da2d8",
    //         colorD: "#7fcdff",

    //         primaryText: "white",
    //         secondaryText: "black",
    //         headerText: "#064273"
    //     }

    //     return colors;
    // }


}

