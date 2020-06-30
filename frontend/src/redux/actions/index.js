import {
    INCREASE_RATING,
    DECREASE_RATING,
    SET_VALUE,
    SET_RATING_RIGHT,
    SET_IS_AUTH,
    SET_LOGIN_ERROR,
} from "../constants/action-types";

export function increaseRating() {
    return {
        type: INCREASE_RATING,
    };
}

export function decreaseRating() {
    return {
        type: DECREASE_RATING,
    };
}

export function setValue(payload) {
    return {
        type: SET_VALUE,
        payload: payload,
    };
}

export function setRatingRight(payload) {
    return {
        type: SET_RATING_RIGHT,
        payload: payload,
    };
}
export function setIsAuth(payload) {
    return {
        type: SET_IS_AUTH,
        payload: payload,
    };
}

export function setLoginError(payload) {
    return {
        type: SET_LOGIN_ERROR,
        payload: payload,
    };
}
