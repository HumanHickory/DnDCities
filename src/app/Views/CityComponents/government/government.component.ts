import { Component, Input, OnInit } from '@angular/core';
import { Government } from 'src/app/Models/Government';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {
  @Input() government: Government;
  @Input() headerColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
