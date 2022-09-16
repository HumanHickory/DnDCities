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
  constructor(private appComp: AppComponent) { }

  ngOnInit(): void {
    
  }

}
