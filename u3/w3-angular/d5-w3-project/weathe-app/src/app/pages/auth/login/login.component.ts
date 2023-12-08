import { AuthService } from './../auth.service';
import { Component, ViewChild } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('form', { static: true }) form!: NgForm;

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:iLogin = {
    email: '',
    password: ''
  }

  save(){
    this.authSvc.login(this.loginData)
    .subscribe(data => {
        this.router.navigate(['/home'])
    })
  }

}
