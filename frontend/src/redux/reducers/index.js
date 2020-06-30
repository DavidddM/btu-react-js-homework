import {
    INCREASE_RATING,
    DECREASE_RATING,
    SET_VALUE,
    SET_RATING_RIGHT,
    SET_IS_AUTH,
    SET_LOGIN_ERROR,
} from "../constants/action-types";

const initalState = {
    rating: 0,
    ratingRight: true,
    isAuth: false,
    loginError: false,
};

function rootReducer(state = initalState, action) {
    console.log(action);
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
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload.loginError,
            };
    }
}

export default rootReducer;
