import {IPost, IPosts, IPostsState} from "../../types/post-types";
import {
    IFetchPostsFailure,
    IFetchPostsRequest,
    IFetchPostsSuccess,
    PostsAction,
    PostsActionTypes
} from "../../types/post-action-types";

const initialState: IPostsState = {
    currentPage: 1,
    totalPosts: 0,
    postsPerPage: 10,
    pending: false,
    errorMsg: '',
    posts: {
        byId: {},
        allIds: [],
    },
    isNoMorePosts: false,
}

export const postsReducer = (state: IPostsState = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            const newPosts: IPosts = {
                byId: {},
                allIds: [],
            }
            action.payload.forEach((post) => {
                newPosts.byId[post.id] = post;
                newPosts.allIds.push(post.id);
            })

            return {
                ...state,
                currentPage: state.currentPage + 1,
                totalPosts: state.totalPosts + state.postsPerPage,
                pending: false,
                errorMsg: '',
                posts: {
                    byId: {
                        ...state.posts.byId,
                        ...newPosts.byId,
                    },
                    allIds: [...state.posts.allIds, ...newPosts.allIds]
                },
                isNoMorePosts: newPosts.allIds.length < state.postsPerPage
            };
        case PostsActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                pending: false,
                errorMsg: action.payload,
            };
        default:
            return state;
    }
}

export const fetchPostsRequest = (): IFetchPostsRequest => ({
    type: PostsActionTypes.FETCH_POSTS_REQUEST,
});
export const fetchPostsSuccess = (payload: IPost[]): IFetchPostsSuccess => ({
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload,
});
export const fetchPostsFailure = (payload: string): IFetchPostsFailure => ({
    type: PostsActionTypes.FETCH_POSTS_FAILURE,
    payload,
});
