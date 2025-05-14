import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './alert.component.html',
  selector: 'app-alert',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message: string;
  @Output() onCLose = new EventEmitter<void>();

  onCloseAlert() {
    this.onCLose.emit();
  }
}
