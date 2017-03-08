import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Server } from "../interfaces/server";
import { ServerService } from "../services/server.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ ServerService ]
})
export class ServersComponent implements OnInit {
  servers: Server[];
  errorMessage: string;
  mode = "Observable";

  constructor(private serverService: ServerService, private router: Router) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getServers());
  }

  getServers() {
    this.serverService.getServers()
        .subscribe(
          data => this.servers = data,
          error => this.errorMessage = <any>error
        );
  }

  goToSHow(server: Server): void {
    let link = ['/server', server.id];
    this.router.navigate(link);
  }

  goToEdit(server: Server): void {
    let edit = "edit"
    let link = ['/server', server.id, edit];
    this.router.navigate(link);
  }

  goToDelete(server: Server): void {
    if (confirm("Você tem certeza que quer deletar o servidor "
                + server.name.toUpperCase()+'.'+server.domain.toUpperCase() + "?")) {
      let index = this.servers.indexOf(server);
      this.servers.splice(index, 1);
      this.serverService.deleteServer(server.id).subscribe();
    }
  }
}
