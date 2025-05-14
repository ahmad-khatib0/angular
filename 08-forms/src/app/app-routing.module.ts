import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { TemplateDrivenFormsComponent } from "./template-driven-forms/template-driven-forms.component";

const appRoutes: Routes = [
  { path: "td-forms", component: TemplateDrivenFormsComponent },
  {
    path: "reactive-forms",
    component: ReactiveFormsComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
