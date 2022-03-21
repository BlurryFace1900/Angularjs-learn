import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

/*import { WarningComponent } from "./warning/warning.component";
import { SuccessComponent } from "./success/success.component";
import { PracticeComponent } from "./practice2/practice2.component";
import { DirectiveComponent } from "./directives/directives.component";
import { DirectivePracticeComponent } from "./directivepractice/directivepractice.component";
*/

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UserComponent },
  { path: "servers", component: ServerComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ServerComponent, UserComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
