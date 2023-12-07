import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiKey = '7d10f71bd4ec4e743e8d1083c69bb35a';
  private apiUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiUrl2 = 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName}&limit=5&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeather(lat:number, lon:number): Observable<any> {
    const url = `${this.apiUrl2}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
