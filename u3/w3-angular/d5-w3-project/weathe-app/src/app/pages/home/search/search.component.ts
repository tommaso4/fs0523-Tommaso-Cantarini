import { AuthService } from './../../auth/auth.service';
import { HomeService } from './../home.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {


  searchQuery: string = '';
  citysrc: any;
  weatherForecast: any;

  isMainVisible: boolean = false;

  constructor(
    private homeSvc: HomeService,
    private datePipe: DatePipe,
    private authSvc: AuthService) { }


  search() {

    this.homeSvc.searchCity(this.searchQuery).subscribe(data => {
      if (data) {
        this.isMainVisible = true;
        this.citysrc = data[0];
        const lat = data[0].lat;
        const lon = data[0].lon;

        this.homeSvc.getWeather(lat, lon).subscribe(forecast => {
          this.weatherForecast = forecast.list;
          console.log(this.weatherForecast);
        });
      }
    });

    this.searchQuery = '';
  }

  formatDateTime(dateTime: string): string {
    const formattedDate = this.datePipe.transform(dateTime, 'dd/MM HH:mm');
    return formattedDate || dateTime;
  }

  addFavorite() {
    this.authSvc.addFavorite(this.citysrc).subscribe(data => {
        console.log(data)
    })
  }
}
