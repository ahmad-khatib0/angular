import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'test server', content: 'test content server' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) this.evenNumbers.push(firedNumber);
    else this.oddNumbers.push(firedNumber);
  }
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
}
