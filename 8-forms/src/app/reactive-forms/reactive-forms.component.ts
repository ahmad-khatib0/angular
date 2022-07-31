import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  constructor() {}

  genders = ["male", "female"];
  forbiddenNamesUsers = ["Chris", "Ali"];
  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        //we bind this, because in forbiddenNames when we call this.forbiddenNamesUsers.indexOf, in this case
        // down this is defined, but here when Angular calls this custom validation  ,its not
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    // this.signupForm.valueChanges.subscribe((data) => console.log(data));
    this.signupForm.statusChanges.subscribe((status) => console.log(status)); //INVALID | PENDING | VALID

    this.signupForm.setValue({
      userData: {
        username: "Reem",
        email: "reem@test.com",
      },
      gender: "female",
      hobbies: [],
    });

    this.signupForm.patchValue({
      userData: {
        username: "Noor",
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  getControls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNamesUsers.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
    // don't return like { nameIsForbidden: false  }, return null or nothing
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com")
          resolve({ emailIsForbidden: true });
        else resolve(null);
      }, 3000);
    });
    return promise;
  }
}
