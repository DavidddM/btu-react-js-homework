import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import LINK_BY_ID_QUERY from "../../queries/link/linkByID";
import Query from "../../components/Query";

import LinkRater from "../../components/LinkRater";

function LinkRaterContainer(props) {
    let { id } = useParams();

    return (
        <Query query={LINK_BY_ID_QUERY} id={id}>
            {({ data: { link } }) => {
                return <LinkRater data={link} />;
            }}
        </Query>
    );
}

export default LinkRaterContainer;
