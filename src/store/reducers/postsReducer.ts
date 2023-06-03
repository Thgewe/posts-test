import {IPostsState} from "../../types/post-types";
import {
    IFetchFilteredPostsRequest,
    IFetchFilteredPostsRequestPayload,
    IFetchPostsFailure,
    IFetchPostsSuccess,
    IFetchPostsSuccessPayload,
    PostsAction,
    PostsActionTypes
} from "../../types/post-action-types";

const initialState: IPostsState = {
    filter: '',
    sort: false,
    currentPage: 1,
    totalPages: 0,
    postsPerPage: 10,
    pending: false,
    errorMsg: '',
    posts: [],
}

export const postsReducer = (state: IPostsState = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_FILTERED_POSTS_REQUEST:
            return {
                ...state,
                filter: action.payload.filter,
                sort: action.payload.sort === undefined
                    ? state.sort
                    : action.payload.sort,
                pending: true,
            }
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            window.scrollTo(0, 0);

            return {
                ...state,
                currentPage: action.payload.newPage,
                pending: false,
                errorMsg: '',
                posts: action.payload.posts,
                totalPages: action.payload.totalPages,
            };
        case PostsActionTypes.FETCH_POSTS_FAILURE:
            window.scrollTo(0, 0);

            return {
                ...state,
                pending: false,
                errorMsg: action.payload,
            };
        default:
            return state;
    }
}

export const fetchFilteredPostsRequest =
    (payload: IFetchFilteredPostsRequestPayload): IFetchFilteredPostsRequest => ({
        type: PostsActionTypes.FETCH_FILTERED_POSTS_REQUEST,
        payload: payload,
})
export const fetchPostsSuccess = (payload: IFetchPostsSuccessPayload): IFetchPostsSuccess => ({
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload,
});
export const fetchPostsFailure = (payload: string): IFetchPostsFailure => ({
    type: PostsActionTypes.FETCH_POSTS_FAILURE,
    payload,
});

