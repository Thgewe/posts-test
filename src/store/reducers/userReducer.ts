import {IUser, IUserState} from "../../types/user-types";
import {
    IFetchUserRequest,
    IFetchUserFailure,
    IFetchUserSuccess,
    UserAction,
    UserActionTypes
} from "../../types/user-action-types";

const initialState: IUserState = {
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
        city: '',
        street: '',
    },
    pending: false,
    errorMsg: '',
}

export const userReducer = (state: IUserState = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                pending: true,
                errorMsg: '',
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                errorMsg: '',
                id: action.payload.id,
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email,
                address: action.payload.address,
            }
        case UserActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                pending: false,
                errorMsg: action.payload,
            }
        default:
            return state;
    }
}

export const fetchUser = (payload: string): IFetchUserRequest => ({
    type: UserActionTypes.FETCH_USER_REQUEST,
    payload,
});
export const fetchUserSuccess = (payload: IUser): IFetchUserSuccess => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload,
});
export const fetchUserFailure = (payload: string): IFetchUserFailure => ({
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload,
});