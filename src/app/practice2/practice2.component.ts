import { Component } from "@angular/core";

@Component({
  selector: "app-practice",
  templateUrl: "./practice2.component.html",
  styleUrls: ["./practice2.component.css"]
})
export class PracticeComponent {
  username = "";
  reset = true;

  OnUpdateUser(event: Event) {
    if ((<HTMLInputElement>event.target).value) {
      this.reset = false;
    }
  }

  OnClickReset() {
    this.username = "";
    this.reset = true;
  }
}
