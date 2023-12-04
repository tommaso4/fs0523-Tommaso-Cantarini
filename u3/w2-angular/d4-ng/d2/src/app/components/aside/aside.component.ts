import { Component } from '@angular/core';
import { IPost } from '../../Modules/ipost';
import { PostsArrService } from '../../posts-arr.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  post: IPost = {
    id: 0,
    title: '',
    type: '',
    body: '',
    disponibile: false
  }

  constructor(private postsArrService: PostsArrService,
    private router: Router,
    private route: ActivatedRoute) { }

  addPost() {
    this.post.disponibile = true;
    this.postsArrService.createPost(this.post);
    this.resetForm();
    if (this.route.snapshot.routeConfig?.path === '') {
      this.router.navigate(['disponibili']);
    } else {
      this.router.navigate(['']);
    }
  }

  upDatePost() {
    this.post.disponibile = true;
    this.postsArrService.updatePost(this.post);
    this.resetForm();
    if (this.route.snapshot.routeConfig?.path === '') {
      this.router.navigate(['disponibili']);
    } else {
      this.router.navigate(['']);
    }
  }

  resetForm() {
    this.post = {
      id: 0,
      title: '',
      type: '',
      body: '',
      disponibile: false
    }
  }
}

