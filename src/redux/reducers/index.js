import {
    SET_IS_AUTH,
    SET_USERNAME,
    SET_LOGIN_ERROR,
} from "../constants/action_types";

const loginState = {
    uid: false,
    isAuth: false,
    loginError: false,
    userName: false,
};

export default function loginReducer(state = loginState, action) {
    switch (action.type) {
        default:
            return state;
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
        case SET_USERNAME: {
            return {
                ...state,
                userName: action.payload.userName,
            };
        }
    }
}
