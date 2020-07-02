import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import LinksContainer from "./containers/Links";
import LinkRater from "./containers/LinkRater";

import LoginForm from "./components/LoginForm";

import "./App.css";
import { connect } from "react-redux";

function App(props) {
    console.log(props.isAuth);
    return (
        <div className="app">
            {props.isAuth && <Header />}
            {!props.isAuth && <LoginForm />}
            <Switch>
                {props.isAuth && (
                    <Route path="/" component={LinksContainer} exact />
                )}
                {props.isAuth && (
                    <Route
                        path="/category/:id"
                        component={LinksContainer}
                        exact
                    />
                )}
                {props.isAuth && (
                    <Route path="/ratelink/:id" component={LinkRater} exact />
                )}
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.loginInfo.isAuth,
});
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
