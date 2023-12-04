import { SvcHttpService } from './../../svc-http.service';
import { Component } from '@angular/core';
import { IProduct } from '../../Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  products:any;
  myProduc:IProduct[] = [];


  constructor(private httpSvc:SvcHttpService,
    private router: Router){}

  ngOnInit(){
    this.httpSvc.getAll().subscribe(data =>{
      this.products = data
      this.myProduc = this.products.products
    } )
  }

  addPreferiti(prod:IProduct):void{
    this.httpSvc.addToFavorites(prod);
    this.router.navigate(['/preferiti']);
  }

}
