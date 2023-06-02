import {IPost} from "./post-types";

export enum PostsActionTypes {
    FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
}

export interface IFetchPostsRequest {
    type: PostsActionTypes.FETCH_POSTS_REQUEST,
}
export interface IFetchPostsSuccess {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: IPost[],
}
export interface IFetchPostsFailure {
    type: PostsActionTypes.FETCH_POSTS_FAILURE,
    payload: string,
}

export type PostsAction =
    IFetchPostsRequest |
    IFetchPostsSuccess |
    IFetchPostsFailure
