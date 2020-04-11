import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.messageService.add({
      severity: "error",
      summary: "Not Logged In",
      detail: "You shall not pass!!!"
    });

    this.router.navigate(['/home']);
    return false;
  }
}
