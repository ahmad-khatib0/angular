import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-practice',
  templateUrl: './data-binding-practice.component.html',
  styleUrls: ['./data-binding-practice.component.css'],
})
export class DataBindingPracticeComponent implements OnInit {
  constructor() {}

  username: string = '';
  userNameEvent: string = '';
  userNameEventStore: string = '';

  ngOnInit(): void {}

  addUserName() {
    this.userNameEvent = this.userNameEventStore;
    this.userNameEventStore = '';
  }
}
