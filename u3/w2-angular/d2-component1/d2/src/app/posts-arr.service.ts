import { Injectable } from '@angular/core';
import { IPost } from './Modules/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsArrService {

    posts:IPost[] = [
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":false
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":false
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":0,
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":false
        },
    ]

    getDisponibile():IPost[] {
      return this.posts.filter(post => post.disponibile);
    }
    getNonDisponibile():IPost[] {
      return this.posts.filter(post => !post.disponibile);
    }
}
