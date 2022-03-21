import { Component } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"]
})
export class DirectiveComponent {
  toggleDisplay = true;
  countries = ["India", "Pakistan"];

  ToggleDisplay() {
    this.toggleDisplay = !this.toggleDisplay;
  }
}
