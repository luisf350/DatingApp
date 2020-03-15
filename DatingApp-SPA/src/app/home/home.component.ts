import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registerToogle() {
    this.registerMode = true;
  }

  cancelRegister(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
