import gql from "graphql-tag";

const LINK_BY_ID_QUERY = gql`
    query Link($id: ID!) {
        link(id: $id) {
            id
            url
            aliveMs
            rating
            created_at
            categories {
                categoryName
            }
        }
    }
`;

export default LINK_BY_ID_QUERY;
