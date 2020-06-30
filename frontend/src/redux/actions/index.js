import {
    INCREASE_RATING,
    DECREASE_RATING,
    SET_VALUE,
    SET_RATING_RIGHT,
    SET_IS_AUTH,
    SET_UID,
    SET_LOGIN_ERROR,
    ADD_RATED_ID,
    START_FETCHING_IDS,
    FETCHING_IDS_ERR,
    FETCHING_IDS_SUCCESS,
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

export function setUid(payload) {
    return {
        type: SET_UID,
        payload: payload,
    };
}

export function setLoginError(payload) {
    return {
        type: SET_LOGIN_ERROR,
        payload: payload,
    };
}

export function addRatedId(payload) {
    return {
        type: ADD_RATED_ID,
        payload: payload,
    };
}

export function startFetching() {
    return {
        type: START_FETCHING_IDS,
    };
}

export function fetchIdsError(payload) {
    return {
        type: FETCHING_IDS_ERR,
        payload: payload,
    };
}

export function fetchIdsSuccess(payload) {
    return {
        type: FETCHING_IDS_SUCCESS,
        payload: payload,
    };
}
