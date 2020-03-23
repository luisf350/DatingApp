import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  registerToogle() {
    this.registerMode = true;
  }

  cancelRegister(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  mostrarMensaje() {
    this.messageService.add({
      severity: "success",
      summary: "Service Message",
      detail: "Via MessageService"
    });

    this.messageService.add({
      severity: "error",
      summary: "Error Message",
      detail: "Validation failed"
    });
  }
}
