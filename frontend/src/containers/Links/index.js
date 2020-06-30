import React from "react";
import { useParams } from "react-router-dom";

import LINKS_BY_CATID_QUERY from "../../queries/link/linksByCatID";
import ALL_LINKS_QUERY from "../../queries/link/allLinks";
import Query from "../../components/Query";

import LinksComponent from "../../components/Links";

function LinksContainer(props) {
    let { id } = useParams();
    const query = id ? LINKS_BY_CATID_QUERY : ALL_LINKS_QUERY;
    return (
        <Query query={query} id={id}>
            {({ data: { links } }) => {
                return <LinksComponent data={links} />;
            }}
        </Query>
    );
}

export default LinksContainer;
