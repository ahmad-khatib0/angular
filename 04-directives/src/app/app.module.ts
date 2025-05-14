import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-hilight/basic-hilight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessCustomStructuralDirectiveDirective } from './unless-custom-structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessCustomStructuralDirectiveDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
