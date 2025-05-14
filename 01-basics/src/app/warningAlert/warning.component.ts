import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `<h2>this is the warning alert</h2>`,
  styles: [
    `
      h2 {
        color: orange;
      }
    `,
  ],
})
export class WarningAlertComponent {}
