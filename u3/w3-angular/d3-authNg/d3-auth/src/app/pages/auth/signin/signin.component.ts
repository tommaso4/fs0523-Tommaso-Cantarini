import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISignin } from '../Models/i-signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  form!: FormGroup
  passwordsMatch = true;

  constructor(private formBuilder: FormBuilder,private authSvc:AuthService,private router:Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required]),
      surname: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required,Validators.email]),
      password: this.formBuilder.control(null, [Validators.required]),
      gender: this.formBuilder.control(null, [Validators.required]),
      user: this.formBuilder.control(null, [Validators.required]),
    })
  }

  send() {
    if (this.form.valid) {
      const formToSend:ISignin = {
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      }
      this.authSvc.signUp(formToSend).subscribe(data => {
        this.router.navigate(['/auth/login'])
    })
      this.form.reset();
    } else {
      console.log('Il form non è valido o la password non corrispondono.');
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched || false;
  }
}
