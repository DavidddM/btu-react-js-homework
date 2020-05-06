import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const HeaderNav = styled.nav`
    border-radius: 25px;
`;

function Header({ menuItemHandler }) {
    return (
        <HeaderNav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" href="#">
                COVID-19
            </span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span className="nav-link" id="all" onClick={menuItemHandler}>All</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="countries" onClick={menuItemHandler}>Countries</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="states" onClick={menuItemHandler}>States</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" id="csse" onClick={menuItemHandler}>John HOpkins CSSE Data</span>
                    </li>
                </ul>
            </div>
        </HeaderNav>
    );
}

Header.propTypes = {
    menuItemHandler: PropTypes.func.isRequired,
};

export default Header;
