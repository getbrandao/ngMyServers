import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServersComponent } from './servers/servers.component';
import { ServersNewComponent } from './servers/servers-new.component';
import { ServersShowComponent } from './servers/servers-show.component';
import { ServersEditComponent } from './servers/servers-edit.component';


import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ServerService } from './services/server.service'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServersComponent,
    ServersNewComponent,
    ServersShowComponent,
    ServersEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
