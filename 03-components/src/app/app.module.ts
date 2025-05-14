import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PockpitComponent } from './pockpit/pockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControllComponent } from './event-emit-practicing/game-controll/game-controll.component';
import { OddComponent } from './event-emit-practicing/odd/odd.component';
import { EvenComponent } from './event-emit-practicing/even/even.component';

@NgModule({
  declarations: [AppComponent, PockpitComponent, ServerElementComponent, GameControllComponent, OddComponent, EvenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
