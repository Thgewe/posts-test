import {all} from "redux-saga/effects";
import {filteredPostsWatcher} from "./postsSaga";
import {commentsWatcher} from "./commentsSaga";

export function* rootWatcher() {
    yield all([
        commentsWatcher(),
        filteredPostsWatcher(),
    ]);
}