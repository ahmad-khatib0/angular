import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  genders = ["male", "female"];
  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male"),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
