import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SigninComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
