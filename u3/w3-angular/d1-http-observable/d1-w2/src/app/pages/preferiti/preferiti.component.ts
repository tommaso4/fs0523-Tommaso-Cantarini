import { Component } from '@angular/core';
import { IProduct } from '../../Models/product';
import { SvcHttpService } from '../../svc-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  myProduc: IProduct[] = [];

  constructor(private httpSvc: SvcHttpService,
    private router: Router) { }

  ngOnInit() {
    this.httpSvc.getAllFavorite().subscribe(data => this.myProduc = data)
  }

  removePreferiti(prod:IProduct):void{
    this.httpSvc.removeFavorite(prod);
    this.router.navigate(['']);
  }
}
