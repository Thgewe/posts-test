import {IPost} from "../../types/post-types";
import {call, put, select, takeLatest} from "redux-saga/effects";
import apiService from "../../api/service";
import {fetchPostsFailure, fetchPostsSuccess} from "../reducers/postsReducer";
import {PostsActionTypes} from "../../types/post-action-types";

function* postsWorker() {

    const { currentPage } = yield select((state) => state.posts);

    try {
        const posts: IPost[] = yield call(() => apiService.getPosts(currentPage));
        yield put(fetchPostsSuccess(posts));
    } catch (e: any) {
        yield put(fetchPostsFailure(e.message));
    }
}

export function* postsWatcher() {
    yield takeLatest(PostsActionTypes.FETCH_POSTS_REQUEST, postsWorker);
}