import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import store from "./redux/store";

import client from "./utils/apolloClient";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

import "./index.css";

const myApp = (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);

ReactDOM.render(myApp, document.getElementById("root"));
