import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/services/posts.interface";

export const loadPosts = createAction('[Posts Component] LoadPosts');
export const loadPostsSuccess = createAction('[Posts Component] loadPostsSuccess',
    props<{posts: Posts[]}>()
);
export const loadPostsError = createAction('[Posts Component] loadPostsError',
    props<{errorMessage: string}>()
)