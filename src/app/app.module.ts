import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent} from './login-page/login-page.component';
import { InfoPgComponent } from './info-pg/info-pg.component';
import { UpperCasePipe } from './upper-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InfoPgComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
