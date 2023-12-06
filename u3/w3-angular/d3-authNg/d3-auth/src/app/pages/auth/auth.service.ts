import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISignin } from './Models/i-signin';
import { IAccess } from './Models/i-access';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ILogin } from './Models/i-login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient,private router:Router) {
    this.restoreUser()
  }

  apiUrl:string ='http://localhost:3000'
  signinUrl:string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';


  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<IAccess| null>(null)

  user$ = this.authSubject.asObservable();//contiene i dati dell'utente loggato oppure null
  isLoggedIn$ = this.user$.pipe(map(user => !!user))//fornisce true o false in base allo stato di autenticaziuone dell'utente

  signUp(data:ISignin):Observable<IAccess>{
    return this.http.post<IAccess>(this.signinUrl,data)
  }

  logIn(data:ILogin):Observable<IAccess>{
    return this.http.post<IAccess>(this.loginUrl,data)
    .pipe(tap(data=> {

      this.authSubject.next(data)
      localStorage.setItem('accessData', JSON.stringify(data))

      this.autoLogout(data.accessToken)
    }))
  }

  restoreUser(){
    const userJson:string| null = localStorage.getItem('accessData')
    if (!userJson) return

    const accessData:IAccess = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return

    this.autoLogout(accessData.accessToken)
    this.authSubject.next(accessData)
  }

  logOut(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(()=>{
      this.logOut()
    },expMs)
  }

}
