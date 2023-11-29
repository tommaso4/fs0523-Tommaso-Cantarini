import { Injectable } from '@angular/core';
import { IPost } from './Modules/ipost';

@Injectable({
  providedIn: 'root'
})

export class PostsArrService {

    posts:IPost[] = [
        {
          "id":0,
          "type": "news",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":1,
          "type": "politics",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":2,
          "type": "education",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":false
        },
        {
          "id":3,
          "type": "politics",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":4,
          "type": "politics",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":5,
          "type": "news",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":false
        },
        {
          "id":6,
          "type": "education",
          "title":"Eccoci a Catania",
          "body":"lorem ipsum dolor sit amet, consectetur adipiscing",
          "disponibile":true
        },
        {
          "id":7,
          "type": "politics",
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

    deletePost(postId:number):void {
      const index = this.posts.findIndex(post => post.id === postId);
      this.posts.splice(index, 1);
    }

    createPost(newPost:IPost):void{
      this.posts.push(newPost);
    }

    getPostById(postId: number): IPost | undefined {
      return this.posts.find(post => post.id === postId);
    }

    updatePost(updatedPost: IPost): void {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        this.posts[index] = updatedPost;
      }
    }

}
