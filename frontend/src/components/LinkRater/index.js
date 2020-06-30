import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    increaseRating,
    decreaseRating,
    setValue,
    setRatingRight,
    addRatedId,
} from "../../redux/actions";
import { useMutation } from "react-apollo";

import UPDATE_LINK_RATING_BY_ID_MUTATION from "../../mutations/link/updateLinkRatingByID";
import UPDATE_USER_LINKS_REL_MUTATION from "../../mutations/user/updateUserLinksrel";
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
    const [updateLinkrel] = useMutation(UPDATE_USER_LINKS_REL_MUTATION);
    const [updateLinkRating] = useMutation(UPDATE_LINK_RATING_BY_ID_MUTATION);
    useEffect(() => {
        props.setValue({ rating: props.data.rating });
        props.setRatingRight({ ratingRight: true });
        if (props.ratedIds.includes(props.data.id)) {
            props.setRatingRight({ ratingRight: false });
        }
    }, []);
    return (
        <BalancedDiv>
            {props.ratingRight && (
                <Countdown
                    date={Date.now() + props.data.aliveMs}
                    onComplete={() => {
                        props.setRatingRight({ ratingRight: false });
                        props.addRatedId({ ratedId: props.data.id });
                    }}
                />
            )}
            <h1>
                <a href={props.data.url}>{props.data.url}</a>
            </h1>
            <h2>Rating: {props.rating}</h2>
            {props.ratingRight && (
                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            updateLinkRating({
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
                            updateLinkrel({
                                variables: {
                                    id: props.uid,
                                    links: [...props.ratedIds, props.data.id],
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
                            props.addRatedId({
                                ratedId: props.data.id,
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
                            updateLinkRating({
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
                            updateLinkrel({
                                variables: {
                                    id: props.uid,
                                    links: [...props.ratedIds, props.data.id],
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
                            props.addRatedId({
                                ratedId: props.data.id,
                            });
                            console.log(
                                props.ratedIds.map((rId) => parseInt(rId))
                            );
                        }}
                        style={{ fontSize: "30px" }}
                    >
                        Nay!
                    </button>
                </div>
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
    uid: state.uid,
    rating: state.rating,
    ratingRight: state.ratingRight,
    ratedIds: state.ratedIds,
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
        addRatedId(payload) {
            dispatch(addRatedId(payload));
        },
    };
};

const ConnectedLinkRater = connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkRater);

export default ConnectedLinkRater;
