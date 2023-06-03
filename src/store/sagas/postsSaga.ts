import {call, put, select, takeLatest} from "redux-saga/effects";
import apiService from "../../api/service";
import {fetchPostsFailure, fetchPostsSuccess} from "../reducers/postsReducer";
import {IFetchFilteredPostsRequest, PostsActionTypes} from "../../types/post-action-types";
import {IGetPosts} from "../../types/api-return-types";

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

export function* filteredPostsWatcher() {
    yield takeLatest(PostsActionTypes.FETCH_FILTERED_POSTS_REQUEST, filteredPostsWorker);
}