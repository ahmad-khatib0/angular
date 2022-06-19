import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PockpitComponent } from './pockpit/pockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [AppComponent, PockpitComponent, ServerElementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
