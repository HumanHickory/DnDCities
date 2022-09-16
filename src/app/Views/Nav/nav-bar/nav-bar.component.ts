import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() navBarLightText: boolean;
  @Input() cityId: number;
  @Input() cityName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
