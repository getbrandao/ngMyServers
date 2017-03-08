import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { Server } from "../interfaces/server";
import { ServerService } from "../services/server.service";

import { IpValidator } from "../validators/ip-validator";

@Component({
  selector: 'app-servers-edit',
  templateUrl: './servers-edit.component.html',
  styleUrls: ['./servers-edit.component.css'],
  providers: [ ServerService ]
})
export class ServersEditComponent implements OnInit {
  server: Server;
  serverForm: FormGroup;

  constructor(
    private router: Router,
    private actroute: ActivatedRoute,
    private serverService: ServerService,
    private formBuilder: FormBuilder) { }


  ngOnInit() {

    let serverRequest = this.actroute.params
    .flatMap((params: Params) => this.serverService.getServer(+params['id']));
    serverRequest.subscribe(response => { this.server = response.json();
                                          this.buildForm();});



  }

  buildForm() {
    this.serverForm = this.formBuilder.group({
      name: [this.server.name, Validators.required],
      domain: [this.server.domain, Validators.required],
      network: [this.server.network, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ip: [this.server.ip, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      netmask: [this.server.netmask, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      router: [this.server.router, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ns1: [this.server.ns1, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ns2: [this.server.ns2, Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      so: this.server.so,
      version: [this.server.version, Validators.required],
      arch: [this.server.arch, Validators.required],
      function: [this.server.function, Validators.required],
      user: [this.server.user, Validators.required],
      password: [this.server.password, Validators.required],
    });
  }

  updateServer(){
    // this.success = true;
    this.serverService.updateServer(this.server.id, this.serverForm)
        .subscribe(
          data => {this.router.navigate(['servers'])},
          error => {
            console.log("Error saving Server");
            return Observable.throw(error);
          });

  }

  // debug(): string {
	// 	return JSON.stringify(this.serversFormComponent.serverForm.value);
	// }

}
