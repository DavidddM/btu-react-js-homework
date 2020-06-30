import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    increaseRating,
    decreaseRating,
    setValue,
    setRatingRight,
} from "../../redux/actions";
import { Mutation } from "react-apollo";

import UPDATE_LINK_RATING_BY_ID_MUTATION from "../../mutations/updateLinkRatingByID";
import styled from "styled-components";

import Countdown from "react-countdown";
import { useHistory } from "react-router-dom";

const BalancedDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    justify-content: space-evenly;
`;
const MsgDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: space-evenly;
`;

function LinkRater(props) {
    const history = useHistory();
    useEffect(() => {
        props.setValue({ rating: props.data.rating });
        props.setRatingRight({ ratingRight: true });
    }, []);
    return (
        <BalancedDiv>
            <Countdown
                date={Date.now() + props.data.aliveMs}
                onComplete={() => props.setRatingRight({ ratingRight: false })}
            />
            <h1>
                <a href={props.data.url}>{props.data.url}</a>
            </h1>
            <h2>Rating: {props.rating}</h2>
            {props.ratingRight && (
                <Mutation mutation={UPDATE_LINK_RATING_BY_ID_MUTATION}>
                    {(exec) => (
                        <div>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    exec({
                                        variables: {
                                            id: props.data.id,
                                            rating: props.rating + 1,
                                        },
                                        context: {
                                            headers: {
                                                authorization: `Bearer ${localStorage.getItem(
                                                    "token"
                                                )}`,
                                            },
                                        },
                                    });
                                    props.increaseRating();
                                    props.setRatingRight({
                                        ratingRight: false,
                                    });
                                }}
                                style={{
                                    marginRight: "50px",
                                    fontSize: "30px",
                                }}
                            >
                                Yay!
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    exec({
                                        variables: {
                                            id: props.data.id,
                                            rating: props.rating - 1,
                                        },
                                        context: {
                                            headers: {
                                                authorization: `Bearer ${localStorage.getItem(
                                                    "token"
                                                )}`,
                                            },
                                        },
                                    });
                                    props.decreaseRating();
                                    props.setRatingRight({
                                        ratingRight: false,
                                    });
                                }}
                                style={{ fontSize: "30px" }}
                            >
                                Nay!
                            </button>
                        </div>
                    )}
                </Mutation>
            )}
            {!props.ratingRight && (
                <MsgDiv>
                    You've either already rated this particular link or the time
                    has passed!
                    <button
                        className="btn btn-dark"
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        Go back
                    </button>
                </MsgDiv>
            )}
        </BalancedDiv>
    );
}

const mapStateToProps = (state) => ({
    rating: state.rating,
    ratingRight: state.ratingRight,
});

const mapDispatchToProps = (dispatch) => {
    return {
        increaseRating() {
            dispatch(increaseRating());
        },
        decreaseRating() {
            dispatch(decreaseRating());
        },
        setValue(payload) {
            dispatch(setValue(payload));
        },
        setRatingRight(payload) {
            dispatch(setRatingRight(payload));
        },
    };
};

const ConnectedLinkRater = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkRater);

export default ConnectedLinkRater;
