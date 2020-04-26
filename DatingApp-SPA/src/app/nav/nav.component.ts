import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log("Logged in successfully");
      },
      (err) => {
        console.log("Failed to login");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  editProfile(){
    this.router.navigate(['/member/edit']);
  }

  logOut() {
    localStorage.removeItem("token");
    console.log("logged out");
  }
}
