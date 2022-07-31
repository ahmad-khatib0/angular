import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-forms",
  templateUrl: "./template-driven-forms.component.html",
  styleUrls: ["./template-driven-forms.component.css"],
})
export class TemplateDrivenFormsComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  submitted: boolean = false;
  defaultQuestion = "pet";
  answer = "";
  genders: string[] = ["female", "male"];

  user = {
    username: "",
    email: "",
    secret: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male",
    // });//not best approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit(form: NgForm) {
  // console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm); //using ViewChild is useful ie if you wanna get data before submitting
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
