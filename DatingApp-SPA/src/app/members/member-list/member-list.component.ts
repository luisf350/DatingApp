import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent implements OnInit {
  users: Array<User>;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (next) => {
        this.users = [...next];
      },
      (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Load Users",
          detail: error
        });
      }
    );
  }
}
