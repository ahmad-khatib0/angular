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
  serverCreated: boolean = false;
  servers = ['Test Server', 'Test server 2'];

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created , name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
