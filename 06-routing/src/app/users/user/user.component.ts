import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    }; //this will run only one time,
    // but this will run each time route changes (ie reload another name and id on same component)
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      (this.user.id = params["id"]), (this.user.name = params["name"]);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    // it's not necessary here, angular will do it, but if you have your own subscriptions its important
  }
}
