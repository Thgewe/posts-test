import {IPost} from "./post-types";

export enum PostsActionTypes {
    FETCH_FILTERED_POSTS_REQUEST = 'FETCH_FILTERED_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE',
}

export interface IFetchPostsSuccessPayload {
    posts: IPost[],
    newPage: number,
    totalPages: number,
}
export interface IFetchFilteredPostsRequestPayload {
    filter: string,
    newPage: number,
    sort?: boolean,
}

export interface IFetchFilteredPostsRequest {
    type: PostsActionTypes.FETCH_FILTERED_POSTS_REQUEST,
    payload: IFetchFilteredPostsRequestPayload
}
export interface IFetchPostsSuccess {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: IFetchPostsSuccessPayload,
}
export interface IFetchPostsFailure {
    type: PostsActionTypes.FETCH_POSTS_FAILURE,
    payload: string,
}

export type PostsAction =
    IFetchFilteredPostsRequest |
    IFetchPostsSuccess |
    IFetchPostsFailure
