import { describe, expect, it } from "@jest/globals";
import * as types from "../redux/constants/action-types";
import * as actions from "../redux/actions/";
import rootReducer, { loginReducer, dataReducer } from "../redux/reducers";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginForm from "../components/LoginForm";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

// მთლად ყველაფერს არ გავტესტავ, დიდ დროს წაიღებს და literally copy-paste იქნება

describe("root reducer", () => {
    it("should return the initial state", () => {
        expect(rootReducer(undefined, {})).toEqual({
            rating: 0,
            ratingRight: true,
        });
    });
    it("should return the rating: 15", () => {
        expect(
            rootReducer([], {
                type: types.SET_VALUE,
                payload: { rating: 15 },
            })
        ).toEqual({
            rating: 15,
        });
    });
});

describe("login reducer", () => {
    it("should return the initial state", () => {
        expect(loginReducer(undefined, {})).toEqual({
            uid: false,
            isAuth: false,
            loginError: false,
            jwt: false,
            userName: false,
        });
    });
    it("should return the isAuth: true", () => {
        expect(
            loginReducer([], {
                type: types.SET_IS_AUTH,
                payload: { isAuth: true },
            })
        ).toEqual({
            isAuth: true,
        });
    });
    it("should return the userName: David", () => {
        expect(
            loginReducer([], {
                type: types.SET_USERNAME,
                payload: { userName: "David" },
            })
        ).toEqual({
            userName: "David",
        });
    });
});

describe("data reducer", () => {
    it("should return the initial state", () => {
        expect(dataReducer(undefined, {})).toEqual({
            ratedIds: [],
            fetchPending: false,
            error: false,
        });
    });
    it("should return the fetchPending: true", () => {
        expect(
            dataReducer([], {
                type: types.START_FETCHING_IDS,
                payload: { fetchPending: true },
            })
        ).toEqual({
            fetchPending: true,
        });
    });
    it("should return the rateIds & fetchPending: false", () => {
        expect(
            dataReducer([], {
                type: types.FETCHING_IDS_SUCCESS,
                payload: { fetchPending: false, ratedIds: [1, 2, 3, 4] },
            })
        ).toEqual({
            fetchPending: false,
            ratedIds: [1, 2, 3, 4],
        });
    });
});

describe("login actions", () => {
    it("set isAuth to true", () => {
        const payload = {
            isAuth: true,
        };
        const expectedAction = {
            type: types.SET_IS_AUTH,
            payload,
        };
        expect(actions.setIsAuth(payload)).toEqual(expectedAction);
    });
    it("set random generated jwt", () => {
        const jwt = Math.floor(Math.random() * 1000000000000);
        const payload = {
            jwt: jwt,
        };
        const expectedAction = {
            type: types.SET_JWT,
            payload,
        };
        expect(actions.setJwt(payload)).toEqual(expectedAction);
    });
    it("set random username", () => {
        const payload = {
            userName: "david",
        };
        const expectedAction = {
            type: types.SET_USERNAME,
            payload,
        };
        expect(actions.setUsername(payload)).toEqual(expectedAction);
    });
});

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe("Login component", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            loginInfo: {
                uid: false,
                isAuth: false,
                loginError: false,
                jwt: false,
                userName: false,
            },
            app: {
                rating: 15,
                ratingRight: false,
            },
            data: {
                ratedIds: [1, 2, 3],
            },
        });
    });

    it("render LoginForm", () => {
        const component = mount(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});
