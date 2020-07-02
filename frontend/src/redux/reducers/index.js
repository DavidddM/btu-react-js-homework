import {
    INCREASE_RATING,
    DECREASE_RATING,
    SET_VALUE,
    SET_RATING_RIGHT,
    SET_IS_AUTH,
    SET_UID,
    SET_USERNAME,
    SET_JWT,
    SET_LOGIN_ERROR,
    ADD_RATED_ID,
    START_FETCHING_IDS,
    FETCHING_IDS_ERR,
    FETCHING_IDS_SUCCESS,
} from "../constants/action-types";

const initalState = {
    rating: 0,
    ratingRight: true,
};

function rootReducer(state = initalState, action) {
    switch (action.type) {
        default:
            return state;
        case INCREASE_RATING:
            return {
                ...state,
                rating: ++state.rating,
            };

        case DECREASE_RATING:
            return {
                ...state,
                rating: --state.rating,
            };
        case SET_VALUE:
            return {
                ...state,
                rating: action.payload.rating,
            };
        case SET_RATING_RIGHT:
            return {
                ...state,
                ratingRight: action.payload.ratingRight,
            };
    }
}

const loginState = {
    uid: false,
    isAuth: false,
    loginError: false,
    jwt: false,
    userName: false,
};

export function loginReducer(state = loginState, action) {
    switch (action.type) {
        default:
            return state;
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
            };
        case SET_UID:
            return {
                ...state,
                uid: action.payload.uid,
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload.loginError,
            };
        case SET_JWT:
            return {
                ...state,
                jwt: action.payload.jwt,
            };
        case SET_USERNAME: {
            return {
                ...state,
                userName: action.payload.userName,
            };
        }
    }
}

const dataState = { ratedIds: [], fetchPending: false, error: false };

export function dataReducer(state = dataState, action) {
    switch (action.type) {
        default:
            return state;
        case ADD_RATED_ID:
            return {
                ...state,
                ratedIds: [...state.ratedIds, action.payload.ratedId],
            };
        case START_FETCHING_IDS: {
            return {
                ...state,
                fetchPending: true,
            };
        }
        case FETCHING_IDS_ERR: {
            return {
                ...state,
                fetchPending: false,
                error: action.payload.fetchingErr,
            };
        }
        case FETCHING_IDS_SUCCESS: {
            return {
                ...state,
                fetchPending: false,
                ratedIds: action.payload.ratedIds,
            };
        }
    }
}

export default rootReducer;
