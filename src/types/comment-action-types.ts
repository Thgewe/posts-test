import {IComment} from "./comment-types";

export enum CommentsActionTypes {
    FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE',
}

export interface ICommentSuccessPayload {
    comments: IComment[],
    postId: string,
}
export interface ICommentFailurePayload {
    errorMsg: string,
    postId: string,
}

export interface IFetchCommentsRequest {
    type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
    payload: string, // postID
}
export interface IFetchCommentsSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: ICommentSuccessPayload,
}
export interface IFetchCommentsFailure {
    type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
    payload: ICommentFailurePayload,
}

export type CommentsAction =
    IFetchCommentsRequest |
    IFetchCommentsSuccess |
    IFetchCommentsFailure