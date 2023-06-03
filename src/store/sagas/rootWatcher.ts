import {all} from "redux-saga/effects";
import {filteredPostsWatcher, userPostsWatcher} from "./postsSaga";
import {commentsWatcher} from "./commentsSaga";
import {userWatcher} from "./userSaga";

export function* rootWatcher() {
    yield all([
        commentsWatcher(),
        filteredPostsWatcher(),
        userWatcher(),
        userPostsWatcher(),
    ]);
}