import { Component, Input } from '@angular/core';
import { IPost } from '../../../Modules/ipost';
import { Router } from '@angular/router';


@Component(
  {
  selector: 'app-btn-disp',
  templateUrl: './btn-disp.component.html',
  styleUrl: './btn-disp.component.scss'
})
export class BtnDispComponent {

  @Input() post: IPost | undefined;


  constructor(public router: Router) { }

  changeDisp() {
    if(this.post){
      this.post.disponibile = !this.post.disponibile;
      this.router.navigate(['']);
    }
  }
}
