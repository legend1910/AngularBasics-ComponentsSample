import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // We are expecting some value form parent component which is App.Component
  // where we are passing the value to this component by the below code where you can see the number
  //<app-odd *ngFor="let value of oddNumbers" [number]="value"></app-odd>
  @Input() number: number;
  constructor() {}

  ngOnInit() {}
}
