import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Params, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { Server } from "../interfaces/server";
import { ServerService } from "../services/server.service";

@Component({
  selector: 'app-servers-show',
  templateUrl: './servers-show.component.html',
  styleUrls: ['./servers-show.component.css'],
  providers: [ ServerService ]
})
export class ServersShowComponent implements OnInit {

  constructor(private http: Http,
              private actroute: ActivatedRoute,
              private serverService: ServerService ) { }

  @Input()
  server: Server;

  ngOnInit() {
    let serverRequest = this.actroute.params
        .flatMap((params: Params) => this.serverService.getServer(+params['id']));
    serverRequest.subscribe(response => this.server = response.json());
  }

}
