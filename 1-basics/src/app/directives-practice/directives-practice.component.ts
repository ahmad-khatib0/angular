import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css'],
})
export class DirectivesPracticeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  isParagraphShown = false;
  clickingTimestamps = [];
  showParagraph() {
    this.isParagraphShown = !this.isParagraphShown;
    this.clickingTimestamps.push(new Date().toISOString());
  }
}
