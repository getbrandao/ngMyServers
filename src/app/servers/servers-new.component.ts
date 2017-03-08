import { Component, OnInit, Input } from '@angular/core';
import { Server } from "../interfaces/server";
import { Observable } from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ServerService } from "../services/server.service";

import { IpValidator } from "../validators/ip-validator";

@Component({
  selector: 'app-servers-new',
  templateUrl: './servers-new.component.html',
  styleUrls: ['./servers-new.component.css'],
  providers: [ ServerService ]
})
export class ServersNewComponent implements OnInit {
  serverForm: FormGroup;

  constructor(
    private serverService: ServerService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.serverForm = this.formBuilder.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      network: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ip: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      netmask: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      router: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ns1: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      ns2: ['', Validators.compose([
        Validators.required,
        IpValidator.validate
      ])],
      so: '',
      version: ['', Validators.required],
      arch: ['', Validators.required],
      function: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  createServer(){
    // this.success = true;
    this.serverService.createServer(this.serverForm)
        .subscribe(
          data => {return true},
          error => {
            console.log("Error saving Server");
            return Observable.throw(error);
          });

  }

  // debug(): string {
	// 	return JSON.stringify(this.serverForm.value);
	// }

}
