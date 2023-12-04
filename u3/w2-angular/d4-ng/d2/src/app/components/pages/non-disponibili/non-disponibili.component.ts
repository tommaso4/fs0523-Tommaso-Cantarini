import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../Modules/ipost';
import { PostsArrService } from '../../../posts-arr.service';

@Component({
  selector: 'app-non-disponibili',
  templateUrl: './non-disponibili.component.html',
  styleUrl: './non-disponibili.component.scss'
})
export class NonDisponibiliComponent implements OnInit {
    posts: IPost[] = [];


    setBg(post:IPost){
      return{'bg-secondary':post.type==='politics',
      'bg-warning':post.type==='education',
      'bg-dark':post.type==='news',
      'text-white':post.type=== 'news'}
    }

    constructor(private postsArrService: PostsArrService) { }

    ngOnInit() {
        this.posts = this.postsArrService.getNonDisponibile();
    }
    deletePost(postId: number): void {
      this.postsArrService.deletePost(postId);
      this.posts = this.postsArrService.getNonDisponibile();
    }
}
