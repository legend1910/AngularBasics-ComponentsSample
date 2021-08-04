import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameComponent } from './game/game.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, EvenComponent, OddComponent,GameComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
