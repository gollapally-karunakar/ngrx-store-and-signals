import { CounterState } from "./counter/counter.reducer";
import { PostsState } from "./posts/posts.reducer";

export interface AppState {
    counter: CounterState,
    posts: PostsState
}