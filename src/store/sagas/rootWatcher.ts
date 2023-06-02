import {all} from "redux-saga/effects";
import {postsWatcher} from "./postsSaga";
import {commentsWatcher} from "./commentsSaga";

export function* rootWatcher() {
    yield all([
        postsWatcher(),
        commentsWatcher(),
    ]);
}