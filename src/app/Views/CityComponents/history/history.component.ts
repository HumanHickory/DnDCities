import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HIstoryComponent implements OnInit {
  @Input() history: string;
  @Input() headerColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
