import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}
  private activateSubject: Subscription;

  ngOnInit() {
    //using event emitter
    // this.userService.activatedEmitter.subscribe((data) => (this.userActivated = data));
    //using Subject
    this.activateSubject = this.userService.activatedEmitter.subscribe(
      (data: boolean) => (this.userActivated = data)
    );
  }

  ngOnDestroy(): void {
    this.activateSubject.unsubscribe(); //you need to do it with Subject
  }
  userActivated: boolean = false;
}
