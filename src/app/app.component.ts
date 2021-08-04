import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
oddNumbers :number[]=[];
evenNumbers :number[]=[];
  onIntveralFired( data :number)
  {
console.log(data);
if(data%2===0)
{
 this.evenNumbers.push(data);
}
else
{
 this.oddNumbers.push(data);
}
  }
}
