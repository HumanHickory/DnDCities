import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Help } from 'src/app/Models/Help';

@Component({
  selector: 'app-help-wanted',
  templateUrl: './help-wanted.component.html',
  styleUrls: ['./help-wanted.component.css']
})
export class HelpWantedComponent implements OnInit {

  @Input() helpWanted: Help[];
  @Input() borderColor: string;
  @Input() headerColor: string;
  @Input() isUnderdark: boolean;
  @Input() textColor: string;
  @Input() boxShadowIsLight: boolean;

  BoxShadowColor: string = "gray";
  Background: string = "white";
  constructor() { }

  ngOnInit(): void {
    if(this.isUnderdark){
      this.Background = "black";
      this.BoxShadowColor = "black";
    }    
    
    if(!this.boxShadowIsLight){
      this.BoxShadowColor = "black";
    }
  }

}
