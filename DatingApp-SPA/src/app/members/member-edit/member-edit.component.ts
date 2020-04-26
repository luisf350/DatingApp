import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { User } from "src/app/models/user";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.scss"],
})
export class MemberEditComponent implements OnInit {
  user: User;

  @ViewChild("editForm", { static: true }) editForm: NgForm;
  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = this.editForm.dirty;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.user = data["user"];
    });
  }

  updateUser() {
    this.userService
      .updateUser(this.authService.decodedToken.nameid, this.user)
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: "success",
            summary: "Update Profile",
            detail: "Profile updated successfully",
          });
          this.editForm.reset(this.user);
        },
        (error) => {
          this.messageService.add({
            severity: "error",
            summary: "Update Profile",
            detail: error
          });
        }
      );
  }
}
