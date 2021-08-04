import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  interval;
  value=0;
  // Here this value is used to send the value to parentComponent that's why we are specifying that it is a output and we are using a event emitter to expose the value
  /*********CHILD Component****************************** */
  //@Output() intervalFired= new EventEmitter<number>(); // Declartion for the event emitter
  //this.intervalFired.emit(this.value+1); this value are passed to the parent
 /******************************************************** */

   /*********Parent Component****************************** */
   //<app-game (intervalFired)="onIntveralFired($event)">// here were are passing the value emitted to the function which is in the parent TS

   /******************************************************** */

  @Output() intervalFired= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  OnStartClick()
  {
this.interval= setInterval(()=>{
  this.intervalFired.emit(this.value+1);
  this.value++;
  },1000);
  }
  OnStopClick()
  {
clearInterval(this.interval);
  }
}