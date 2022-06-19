import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  // encapsulation: ViewEncapsulation.None, // make the styles globals (unscoped)
  // encapsulation: ViewEncapsulation.Emulated // default
})
export class ServerElementComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input('srvElement') element: { type: string; name: string; content: string };
}
