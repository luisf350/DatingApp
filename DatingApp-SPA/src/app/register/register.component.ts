import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output()
  cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.model).subscribe(
      response => {
        console.log("Registration succesfull");
      },
      error => {
        console.error("Error", error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
