import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-eye-of-the-beholder',
  templateUrl: './eye-of-the-beholder.component.html',
  styleUrls: ['./eye-of-the-beholder.component.css']
})
export class EyeOfTheBeholderComponent implements OnInit {
 
  constructor(private appComp: AppComponent, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if(!this.appComp.City){
      var cityId = parseInt(this.activatedRoute.snapshot.paramMap.get("cityId"));
      this.appComp.getCityDetails(cityId);
    }
  }

  
}
