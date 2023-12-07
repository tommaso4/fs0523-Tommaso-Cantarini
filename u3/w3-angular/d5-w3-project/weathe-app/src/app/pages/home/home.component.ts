import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private authSvc: AuthService){ }
  user:any ;
  mysub:any;

  ngOnInit(){
    this.mysub= this.authSvc.user$.subscribe( user => {
      this.user = user?.user
      console.log(this.user);

    })
  }

}
