import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent implements OnInit {
  users: Array<User>;

  constructor(
    private userService: UserService,
    private messageService: MessageService, private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.users = data["users"];
      });
  }
  
}
