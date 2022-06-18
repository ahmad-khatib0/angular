import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',

  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'no server was created';
  serverName = '';
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'server was created , name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
