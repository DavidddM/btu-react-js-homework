import React from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import "./App.css";
import CompetitionCont from "./containers/CompetitionCont";
import AreaCont from "./containers/AreaCont";
import TeamCont from "./containers/TeamCont";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

function App(props) {
    return (
        <div className="App">
            <Header />
            {!props.isAuth && <LoginForm />}
            <Switch>
                {props.isAuth && (
                    <Route path="/" component={CompetitionCont} exact />
                )}
            </Switch>
            <Switch>
                {props.isAuth && (
                    <Route path="/areas" component={AreaCont} exact />
                )}
            </Switch>
            <Switch>
                {props.isAuth && (
                    <Route path="/teams" component={TeamCont} exact />
                )}
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.isAuth,
});
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
