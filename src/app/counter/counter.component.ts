import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.actions';
import { PostsService } from '../services/posts.service';
import * as PostsSelector from '../states/posts/posts.selector';
import * as PostsActions from '../states/posts/posts.action';
import { Posts } from '../services/posts.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  
  count$: Observable<number>;
  posts$!: Observable<Posts[]>;

  constructor(private store: Store<AppState>, private postsServe: PostsService) {
    this.count$ = this.store.select(selectCount);
    this.store.dispatch(PostsActions.loadPosts());
    this.posts$ = this.store.select(PostsSelector.selectAllPosts);
  }

  ngOnInit(){
    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
