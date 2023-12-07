import { HomeService } from './../home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {


  searchQuery: string = '';
  citysrc:any;
  weatherForecast: any;
  isMainVisible: boolean = false;

  constructor(private homeSvc: HomeService) {}


  search() {

    console.log('Valore di ricerca:', this.searchQuery);
    this.homeSvc.searchCity(this.searchQuery).subscribe(data => {
      console.log(data[0]);

      if (data) {
        this.isMainVisible = true;
        this.citysrc = data[0];
        const lat = data[0].lat;
        const lon = data[0].lon;
        console.log(this.citysrc);


        this.homeSvc.getWeather(lat, lon).subscribe(forecast => {
          this.weatherForecast = forecast;
          console.log(this.weatherForecast);
        });
      }
    });

    this.searchQuery = '';
  }

}
