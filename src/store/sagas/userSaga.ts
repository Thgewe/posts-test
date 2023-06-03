import {call, put, takeLatest} from "redux-saga/effects";
import {IFetchUserRequest, UserActionTypes} from "../../types/user-action-types";
import {IUser} from "../../types/user-types";
import apiService from "../../api/service";
import {fetchUserFailure, fetchUserSuccess} from "../reducers/userReducer";

function* userWorker(action: IFetchUserRequest) {
    try {
        const user: IUser = yield call(() => apiService.getUserById(action.payload));
        yield put(fetchUserSuccess(user));
    } catch (e: any) {
        yield put(fetchUserFailure(e.message));
    }
}

export function* userWatcher() {
    yield takeLatest(UserActionTypes.FETCH_USER_REQUEST, userWorker);
}