import { Component, Input, OnInit } from '@angular/core';
import { Weapon } from 'src/app/Models/Weapon';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  @Input() weapons: Weapon[];
  @Input() header: string;

  constructor() { }

  ngOnInit(): void {
  }

  
  CreateCheckerboard(squareNum: number){
    var creamArray = [1, 4, 6, 7, 9, 12, 14, 15, 17, 19];

    if(creamArray.includes(squareNum))
      return true;
    else 
      return false;
}

}
