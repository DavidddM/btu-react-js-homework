import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllContainer from "./containers/AllContainer";
import CountriesContainer from "./containers/CountriesContainer";
import StatesContainer from "./containers/StatesContainer";
import CSSEContainer from "./containers/CSSEContainer";

function App() {
    const [show, setShow] = useState(["all"]);

    const menuItemHandler = ({ target }) => {
        setShow(target.id);
    };
    return (
        <div className="App">
            <Header menuItemHandler={menuItemHandler} />
            {/* ტვინს მიჭამდა ვორნინგები :/ */}
            {show.toString() === "all" ? <AllContainer /> : null}
            {show.toString() === "countries" ? <CountriesContainer /> : null}
            {show.toString() === "states" ? <StatesContainer /> : null}
            {show.toString() === "csse" ? <CSSEContainer /> : null}
        </div>
    );
}

export default App;
