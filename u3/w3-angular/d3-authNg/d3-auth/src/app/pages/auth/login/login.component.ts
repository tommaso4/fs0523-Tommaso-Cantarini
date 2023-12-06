import { AuthService } from './../auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILogin } from '../Models/i-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  @ViewChild('form', { static: true }) form!: NgForm;

  model = {
    email: '',
    password: ''
  };

constructor(private AuthSvc: AuthService, private router:Router){}
  onSubmit() {
    if (this.form.valid) {
      const data: ILogin= {
        email: this.model.email,
        password: this.model.password
      }
      this.AuthSvc.logIn(data).subscribe(data => {
        this.router.navigate(['/auth/home']);
      })
      this.form.reset()
    } else {
      console.log('Il form non è valido.');
    }
  }
}
