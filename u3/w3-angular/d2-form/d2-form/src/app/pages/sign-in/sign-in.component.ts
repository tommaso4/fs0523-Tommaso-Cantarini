import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @ViewChild('form', { static: true }) form!: NgForm;

  model = {
    userName: '',
    password: ''
  };

  onSubmit() {
    if (this.form.valid) {
      console.log('Dati inviati:', this.model);
      this.form.reset()
    } else {
      console.log('Il form non è valido.');
    }
  }
}
