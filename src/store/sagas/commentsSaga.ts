import {call, put, takeLatest} from "redux-saga/effects";
import {CommentsActionTypes, IFetchCommentsRequest} from "../../types/comment-action-types";
import {fetchCommentsFailure, fetchCommentsSuccess} from "../reducers/commentsReducer";
import {IComment} from "../../types/comment-types";
import apiService from "../../api/service";

function* commentsWorker(action: IFetchCommentsRequest) {
    try {
        const comments: IComment[] = yield call(
            () => apiService.getCommentsByPostId(action.payload)
        );
        yield put(fetchCommentsSuccess({
            postId: action.payload,
            comments: comments
        }));
    } catch (e: any) {
        yield put(fetchCommentsFailure({
            postId: action.payload,
            errorMsg: e.message,
        }));
    }
}

export function* commentsWatcher() {
    yield takeLatest(CommentsActionTypes.FETCH_COMMENTS_REQUEST, commentsWorker);
}