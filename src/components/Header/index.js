import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { setIsAuth, setUsername } from "../../redux/actions";

const HeaderNav = styled.nav`
    border-radius: 25px;
`;

const MenuItem = styled.span`
    &:hover {
        cursor: pointer;
    }
`;

function Header(props) {
    const history = useHistory();
    return (
        <HeaderNav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" href="#">
                #Final
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
                        <MenuItem
                            className="nav-link"
                            onClick={(e) => {
                                history.push(`/`);
                            }}
                        >
                            Competitions
                        </MenuItem>
                    </li>
                    <li className="nav-item">
                        <MenuItem
                            className="nav-link"
                            onClick={(e) => {
                                history.push(`/areas`);
                            }}
                        >
                            Areas
                        </MenuItem>
                    </li>
                    <li className="nav-item">
                        <MenuItem
                            className="nav-link"
                            onClick={(e) => {
                                history.push(`/teams`);
                            }}
                        >
                            Teams
                        </MenuItem>
                    </li>
                </ul>
                {props.isAuth && (
                    <ul className="navbar-nav">
                        <span className="navbar-text">
                            Hello, {props.userName}!
                        </span>
                        <li className="nav-item">
                            <MenuItem
                                className="nav-link"
                                id="logout"
                                role="button"
                                onClick={() => {
                                    props.setUsername(false);
                                    props.setIsAuth({ isAuth: false });
                                    history.push("/");
                                }}
                            >
                                Logout
                            </MenuItem>
                        </li>
                    </ul>
                )}
            </div>
        </HeaderNav>
    );
}

const mapStateToProps = (state) => ({
    userName: state.userName,
    isAuth: state.isAuth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth(payload) {
            dispatch(setIsAuth(payload));
        },
        setUsername(payload) {
            dispatch(setUsername(payload));
        },
    };
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
