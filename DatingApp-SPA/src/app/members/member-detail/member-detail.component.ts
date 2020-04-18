import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { MessageService } from "primeng/api/public_api";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-member-detail",
  templateUrl: "./member-detail.component.html",
  styleUrls: ["./member-detail.component.scss"],
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadUser();
    
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params.id).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Load Users",
          detail: error,
        });
      }
    );
  }
}
