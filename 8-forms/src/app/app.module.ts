import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { AppRoutingModule } from "./app-routing.module";
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormsComponent, TemplateDrivenFormsComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
