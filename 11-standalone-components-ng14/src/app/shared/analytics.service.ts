import { Injectable } from "@angular/core";

// @Injectable({ providedIn: 'root' })//first way, second way in main.ts
export class AnalyticsService {
  registerClick() {
    console.log("Clicked!");
  }
}
