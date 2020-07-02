import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Query from "../Query";
import CATEGORIES_QUERY from "../../queries/category/categories";

import { useHistory } from "react-router-dom";

import { setIsAuth, setUid, setUsername, setJwt } from "../../redux/actions";

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
                #RateMyLinkThread
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
                    <li className="nav-item dropdown">
                        <MenuItem
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Categories
                        </MenuItem>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <MenuItem
                                className="dropdown-item"
                                onClick={(e) => {
                                    history.push(`/`);
                                }}
                            >
                                All
                            </MenuItem>
                            <Query query={CATEGORIES_QUERY} id={null}>
                                {({ data: { categories } }) => {
                                    return categories.map((cat) => {
                                        return (
                                            <MenuItem
                                                className="dropdown-item"
                                                key={cat.id}
                                                onClick={(e) =>
                                                    history.push(
                                                        `/category/${cat.id}`
                                                    )
                                                }
                                            >
                                                {cat.categoryName}
                                            </MenuItem>
                                        );
                                    });
                                }}
                            </Query>
                        </div>
                    </li>
                </ul>
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
                                props.setJwt(false);
                                props.setUid({ uid: false });
                                props.setIsAuth({ isAuth: false });
                                history.push("/");
                            }}
                        >
                            Logout
                        </MenuItem>
                    </li>
                </ul>
            </div>
        </HeaderNav>
    );
}

const mapStateToProps = (state) => ({
    userName: state.loginInfo.userName,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth(payload) {
            dispatch(setIsAuth(payload));
        },
        setUid(payload) {
            dispatch(setUid(payload));
        },
        setUsername(payload) {
            dispatch(setUsername(payload));
        },
        setJwt(payload) {
            dispatch(setJwt(payload));
        },
    };
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
