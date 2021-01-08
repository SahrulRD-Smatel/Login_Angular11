import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { InfoPgComponent } from './info-pg/info-pg.component'

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'info-pg', component: InfoPgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
