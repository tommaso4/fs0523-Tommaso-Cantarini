import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HomeService } from '../home.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {

  favorite: any;
  wheatherFavorite:any = []


  constructor(
    private authSvc: AuthService,
    private datePipe: DatePipe,
    private homeSvc: HomeService
    ){}

  ngOnInit(){
    this.authSvc.getFavorite().subscribe(fav => {
      this.favorite = fav;
      this.favorite.forEach((el:any) => {
        this.homeSvc.getWeather(el.coord.lat, el.coord.lon).subscribe(data => {
          this.wheatherFavorite.push(data);
        })
      });

    })
  }

  removeFavorite(cityId:any) {

    this.authSvc.removeFavorite(cityId).subscribe(() => {
      this.wheatherFavorite = this.wheatherFavorite.filter((fav:any) => fav.city.id !== Number(cityId));
    });
  }

  formatDateTime(dateTime: string): string {
    const formattedDate = this.datePipe.transform(dateTime, 'dd/MM HH:mm');
    return formattedDate || dateTime;
  }

}
