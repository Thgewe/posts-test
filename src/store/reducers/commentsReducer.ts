import {ICommentsState} from "../../types/comment-types";
import {
    CommentsAction,
    CommentsActionTypes, ICommentFailurePayload, ICommentSuccessPayload, IFetchCommentsFailure,
    IFetchCommentsRequest,
    IFetchCommentsSuccess
} from "../../types/comment-action-types";

const initialState: ICommentsState = {
    byPostId: {

    },
    postIds: [],
}

export const commentsReducer = (
    state: ICommentsState = initialState,
    action: CommentsAction
): ICommentsState => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                byPostId: {
                    ...state.byPostId,
                    [action.payload]: {
                        ...state.byPostId[action.payload],
                        errorMsg: '',
                        pending: true,
                    },
                },
                postIds: [...state.postIds, action.payload],
            };
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                byPostId: {
                  ...state.byPostId,
                  [action.payload.postId]: {
                      comments: action.payload.comments,
                      errorMsg: '',
                      pending: false,
                  }
                },
            }
        case CommentsActionTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                byPostId: {
                    ...state.byPostId,
                    [action.payload.postId]: {
                        ...state.byPostId[action.payload.postId],
                        errorMsg: action.payload.errorMsg,
                        pending: false,
                    }
                },
            }
        default:
            return state;
    }
}

export const fetchCommentsRequest = (payload: string): IFetchCommentsRequest => ({
    type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
    payload: payload,
});
export const fetchCommentsSuccess = (payload: ICommentSuccessPayload): IFetchCommentsSuccess => ({
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    payload,
});
export const fetchCommentsFailure = (payload: ICommentFailurePayload): IFetchCommentsFailure => ({
    type: CommentsActionTypes.FETCH_COMMENTS_FAILURE,
    payload,
});