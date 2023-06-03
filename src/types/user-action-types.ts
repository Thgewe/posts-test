import {IUser} from "./user-types";

export enum UserActionTypes {
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
}

export interface IFetchUserRequest {
    type: UserActionTypes.FETCH_USER_REQUEST,
    payload: string,
}
export interface IFetchUserSuccess {
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: IUser,
}
export interface IFetchUserFailure {
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload: string,
}

export type UserAction =
    IFetchUserRequest |
    IFetchUserSuccess |
    IFetchUserFailure;
