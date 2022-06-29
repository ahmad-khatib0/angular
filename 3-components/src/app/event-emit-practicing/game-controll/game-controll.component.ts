import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.scss'],
})
export class GameControllComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.startInterval();
  }
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
