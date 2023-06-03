import {call, put, select, takeLatest} from "redux-saga/effects";
import apiService from "../../api/service";
import {fetchPostsFailure, fetchPostsSuccess} from "../reducers/postsReducer";
import {IFetchFilteredPostsRequest, IFetchUserPostsRequest, PostsActionTypes} from "../../types/post-action-types";
import {IGetPosts} from "../../types/api-return-types";
import {IPost} from "../../types/post-types";

function* filteredPostsWorker(action: IFetchFilteredPostsRequest) {

    const { postsPerPage, sort } = yield select(state => state.posts);

    try {
        const data: IGetPosts = yield call(() =>
            apiService.getFilteredPosts(
                action.payload.newPage,
                action.payload.filter,
                sort,
            )
        );
        yield put(fetchPostsSuccess({
            posts: data.posts,
            newPage: action.payload.newPage,
            totalPages: Math.ceil(data.totalPosts / postsPerPage),
        }));
    } catch (e: any) {
        yield put(fetchPostsFailure(e.message));
    }

}

function* userPostsWorker(action: IFetchUserPostsRequest) {
    try {
        const posts: IPost[] = yield call(() => apiService.getUserPosts(action.payload));
        yield put(fetchPostsSuccess({
            posts: posts,
            newPage: 1,
            totalPages: 1,
        }));
    } catch (e: any) {
        yield put(fetchPostsFailure(e.message));
    }
}

export function* userPostsWatcher() {
    yield takeLatest(PostsActionTypes.FETCH_USER_POSTS_REQUEST, userPostsWorker);
}

export function* filteredPostsWatcher() {
    yield takeLatest(PostsActionTypes.FETCH_FILTERED_POSTS_REQUEST, filteredPostsWorker);
}