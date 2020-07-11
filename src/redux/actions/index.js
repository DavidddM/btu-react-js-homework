import {
    SET_IS_AUTH,
    SET_LOGIN_ERROR,
    SET_USERNAME,
} from "../constants/action_types";

export function setIsAuth(payload) {
    return {
        type: SET_IS_AUTH,
        payload: payload,
    };
}

export function setUsername(payload) {
    return {
        type: SET_USERNAME,
        payload: payload,
    };
}

export function setLoginError(payload) {
    return {
        type: SET_LOGIN_ERROR,
        payload: payload,
    };
}
