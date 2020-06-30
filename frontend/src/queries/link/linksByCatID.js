import gql from "graphql-tag";

const LINKS_BY_CATID_QUERY = gql`
    query Links($id: ID!) {
        links(where: { categories: { id_eq: $id } }) {
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

export default LINKS_BY_CATID_QUERY;
