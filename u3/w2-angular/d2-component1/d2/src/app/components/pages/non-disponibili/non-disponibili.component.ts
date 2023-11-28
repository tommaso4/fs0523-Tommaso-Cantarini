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

    constructor(private postsArrService: PostsArrService) { }

    ngOnInit() {
        this.posts = this.postsArrService.getNonDisponibile();
    }
}
