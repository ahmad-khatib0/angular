import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pockpit',
  templateUrl: './pockpit.component.html',
  styleUrls: ['./pockpit.component.scss'],
})
export class PockpitComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // you put @input to make something bindable from outside the component;
  // you put @output to make something listenable from outside the component;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
