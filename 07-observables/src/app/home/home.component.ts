import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private firstObsSubscription: Subscription;
  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    // console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) observer.complete();
        if (count > 5) observer.error(new Error("count is greeter than 5"));
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      // pipe takes unlimited operators
      .pipe(
        filter((data) => data > 0),
        map((data: number) => "round " + (data + 1))
      )
      .subscribe(
        (data) => console.log(data),
        (error) => alert(error.message),
        () => console.log("observable  completed")
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
