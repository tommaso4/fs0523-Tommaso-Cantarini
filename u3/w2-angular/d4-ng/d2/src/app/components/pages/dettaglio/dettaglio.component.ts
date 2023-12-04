import { IPost } from './../../../Modules/ipost';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsArrService } from '../../../posts-arr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})

export class DettaglioComponent {

  post!: IPost;

  constructor(private route: ActivatedRoute,
     private postsArrService: PostsArrService,
     private router: Router,) {

    this.route.params.subscribe(params => {
      const postId: number = Number(params['id']);
      let postSelected = this.postsArrService.getPostById(postId);
      console.log(postSelected);
      this.post = postSelected || { id: 0, type: '',
       title: '',
        body: '',
        disponibile: false };
    });
  }


  setBg(post: IPost) {
    return {
      'bg-secondary': post.type === 'politics',
      'bg-warning': post.type === 'education',
      'bg-dark': post.type === 'news',
      'text-white': post.type === 'news'
    }
  }
}
