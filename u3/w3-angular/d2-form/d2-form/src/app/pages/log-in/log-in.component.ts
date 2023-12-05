import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  form!: FormGroup
  passwordsMatch = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required]),
      surname: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      password2: this.formBuilder.control(null, [Validators.required]),
      gender: this.formBuilder.control(null, [Validators.required]),
      image: this.formBuilder.control(null, [Validators.required]),
      bio: this.formBuilder.control(null, [Validators.required]),
      user: this.formBuilder.control(null, [Validators.required]),
    },{validators: this.passwordsMatchValidator})
  }

  send() {
    if (this.form.valid && this.passwordsMatch) {
      console.log(this.form.value);
      this.form.reset();
    } else {
      console.log('Il form non è valido o le password non corrispondono.');
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched || false;
  }

  private passwordsMatchValidator = (group: FormGroup) => {
    const password = group.get('password')?.value;
    const password2 = group.get('password2')?.value;

    if (password && password2) {
      this.passwordsMatch = password === password2;
    } else {
      this.passwordsMatch = true;
    }

    return this.passwordsMatch ? null : { passwordsNotMatch: true };
  }



}
