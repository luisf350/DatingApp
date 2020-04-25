import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot
} from "@angular/router";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { MessageService } from "primeng/api";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class MemberListResolver implements Resolve<Array<User>> {
  /**
   * Constructor
   */
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Array<User>> {
    return this.userService.getUsers().pipe(
        catchError(error => {
            this.messageService.add({
                severity: "error",
                summary: "Get User",
                detail: "Problem retrieving data"
              });
              this.router.navigate(["/home"]);
              return of(null);
        })
    );
  }
}
