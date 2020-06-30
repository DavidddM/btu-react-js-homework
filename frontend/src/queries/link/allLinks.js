import gql from "graphql-tag";

const ALL_LINKS_QUERY = gql`
    query Links {
        links {
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

export default ALL_LINKS_QUERY;
