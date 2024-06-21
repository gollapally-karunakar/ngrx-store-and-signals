import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { PostsService } from '../services/posts.service';
import * as PostsActions from '../states/posts/posts.action';
import { Observable, map } from 'rxjs';
import { Posts } from '../services/posts.interface';
import *as PostsSelector from '../states/posts/posts.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$!: Observable<Posts[]>;

  constructor(private store: Store<AppState>, private postsServe: PostsService) {
    this.store.dispatch(PostsActions.loadPosts());
    this.posts$ = this.store.select(PostsSelector.selectAllPosts);
    console.log("from state", this.posts$);
    // this.postsServe.getPosts().pipe(data => data).subscribe(posts => {
    //   console.log(posts);
    // });
  }

}
