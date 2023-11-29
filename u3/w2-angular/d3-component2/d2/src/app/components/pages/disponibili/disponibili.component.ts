import { Component, OnInit } from '@angular/core';
import { PostsArrService } from '../../../posts-arr.service';
import { IPost } from '../../../Modules/ipost';

@Component({
  selector: 'app-disponibili',
  templateUrl: './disponibili.component.html',
  styleUrl: './disponibili.component.scss'
})
export class DisponibiliComponent implements OnInit {

  posts: IPost[] = [];

  setBg(post:IPost){
    return{'bg-primary':post.type==='politics','bg-warning':post.type==='education','bg-danger':post.type==='news'}
  }

  constructor(private postsArrService: PostsArrService) { }
  ngOnInit() {
    this.posts = this.postsArrService.getDisponibile();
  }
  deletePost(postId: number): void {
    this.postsArrService.deletePost(postId);
    this.posts = this.postsArrService.getDisponibile();
  }
}

