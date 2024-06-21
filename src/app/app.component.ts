import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from './states/app.state';
import { selectCount } from './states/counter/counter.selector';
import { Store } from '@ngrx/store';
import * as PostsSelector from './states/posts/posts.selector';
import * as PostsActions from './states/posts/posts.action';
import { Posts } from './services/posts.interface';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-store';
  count$: Observable<number>;
  posts$!: Observable<Posts[]>;
  error$!: Observable<string | null>

  constructor(private store: Store<AppState>, private postsServe: PostsService) {
    this.store.dispatch(PostsActions.loadPosts());
    this.posts$ = this.store.select(PostsSelector.selectAllPosts);
    this.error$ = this.store.select(PostsSelector.selectPostsError);
    this.count$ = this.store.select(selectCount);
  }
}
