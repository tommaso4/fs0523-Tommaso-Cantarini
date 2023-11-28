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

  constructor(private postsArrService: PostsArrService) { }
  ngOnInit() {
    this.posts = this.postsArrService.getDisponibile();
  }

}
