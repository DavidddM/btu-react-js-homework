import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer, { loginReducer, dataReducer } from "../reducers/index";

const combined = combineReducers({
    app: rootReducer,
    loginInfo: loginReducer,
    data: dataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combined, composeEnhancers(applyMiddleware(thunk)));

export default store;
