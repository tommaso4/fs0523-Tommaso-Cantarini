import { Component } from '@angular/core';
import { IPost } from '../../Modules/ipost';
import { PostsArrService } from '../../posts-arr.service';

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

  constructor(private postsArrService: PostsArrService) { }
  addPost() {
    this.post.disponibile = true;
    this.postsArrService.createPost(this.post);
    this.resetForm()
  }

  upDatePost() {
    this.post.disponibile = true;
    this.postsArrService.updatePost(this.post);
    this.resetForm();
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
