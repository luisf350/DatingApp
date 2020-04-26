import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { MessageService } from "primeng/api";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  /**
   * Constructor
   */
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError((error) => {
        this.messageService.add({
          severity: "error",
          summary: "Get User",
          detail: "Problem retrieving your data",
        });
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
