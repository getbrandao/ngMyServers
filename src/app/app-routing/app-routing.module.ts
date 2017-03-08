import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from '../homepage/homepage.component';
import { ServersComponent } from '../servers/servers.component';
import { ServersNewComponent } from '../servers/servers-new.component';
import { ServersShowComponent } from '../servers/servers-show.component';
import { ServersEditComponent } from '../servers/servers-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'servers', component: ServersComponent },
  { path: 'server/new', component: ServersNewComponent },
  { path: 'server/:id', component: ServersShowComponent },
  { path: 'server/:id/edit', component: ServersEditComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
