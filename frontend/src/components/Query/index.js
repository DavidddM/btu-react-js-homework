import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const CenteredDiv = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`;

const Query = ({ query, id, children }) => {
    const { data, loading, error } = useQuery(query, {
        variables: {
            id: id,
        },
    });

    if (loading)
        return (
            <CenteredDiv>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </CenteredDiv>
        );
    if (error)
        return (
            <CenteredDiv>
                <div
                    className="alert alert-danger col-xl-6 col-lg-8 col-md-10 col-sm-12"
                    role="alert"
                >
                    Error! {JSON.stringify(error)}
                </div>
            </CenteredDiv>
        );

    return children({ data });
};

export default Query;
