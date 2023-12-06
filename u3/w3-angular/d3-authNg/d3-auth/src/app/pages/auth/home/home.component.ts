import { ISignin } from '../Models/i-signin';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user:any;

 constructor(private authSvc: AuthService){}
  ngOnInit(){
    this.authSvc.user$.subscribe(data=> {
      this.user = data?.user.email
      console.log(this.user);

    })
  }



}
