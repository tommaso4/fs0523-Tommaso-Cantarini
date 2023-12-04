import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './Models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvcHttpService {

  private apiUrl:string = 'https://dummyjson.com/products'
  private favoriti: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http:HttpClient) { }

  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl)
  }

  getAllFavorite():Observable<IProduct[]>{
    return this.favoriti.asObservable()
  }

  addToFavorites(product:IProduct):void{
    const correntFavorite = this.favoriti.value
    this.favoriti.next([...correntFavorite,product])
  }

  removeFavorite(product:IProduct):void{
    const correntFavorite = this.favoriti.value
    const upDatedFavorites = correntFavorite.filter(p=> p.id !== product.id)
    this.favoriti.next(upDatedFavorites)
  }
}
