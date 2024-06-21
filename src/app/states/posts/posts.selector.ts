import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.reducer";

export const selectPostsFeature = createFeatureSelector<PostsState>('posts');

export const selectAllPosts = createSelector(
    selectPostsFeature,
    (state: PostsState) => state.posts
)

export const selectPostsError = createSelector(
    selectPostsFeature,
    (state: PostsState) => state.errorMessage
)