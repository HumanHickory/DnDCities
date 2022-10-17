import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityDetails } from 'src/app/Models/CityDetails';
import { CityService } from 'src/app/Services/Cities/CityService';

@Component({
  selector: 'app-underdark',
  templateUrl: './underdark.component.html',
  styleUrls: ['./underdark.component.css'],
  providers: [CityService]
})
export class UnderdarkComponent implements OnInit {

  City: CityDetails;
  heroImg: string;
  IsLoaded: boolean = false;
  ShowView: any;

  SelectedTabId: number;

  Story: helpOrNewsDetails;

  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));

    this.cityService.GetLocation(cityId).subscribe(details => {
      this.City = details;
      this.heroImg = 'url("../../../../assets/CityImg/' + this.City.name + '.jpg") no-repeat center';
      this.ToggleNewsAndHelp(this.City.help[0].id, true);
      this.IsLoaded = true;
    });

  }

  heroImgStyling() {
    return { 'background': this.heroImg, 'background-size': 'cover', 'height': '20vh', 'position': 'relative' }
  }

  ToggleNewsAndHelp(id: number, isTabHelp: boolean) {
    this.SelectedTabId = id;

    if (isTabHelp) {
      this.City.help.forEach(x => {
        if (x.id == this.SelectedTabId) {
          this.Story = {
            title: x.title,
            author: "",
            storyHtml: x.detailsHtml,
            type: "Help Wanted"
          }
        }
      });
    } else {
      this.City.news.forEach(x => {
        if (x.id == this.SelectedTabId) {
          this.Story = {
            title: x.title,
            author: x.author + ", " + x.source,
            storyHtml: x.storyHtml,
            type: "News"
          };
        }
      });
    }
  }
}

interface helpOrNewsDetails {
  title: string;
  author: string;
  storyHtml: string;
  type: string;
}