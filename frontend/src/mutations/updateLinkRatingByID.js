import gql from "graphql-tag";

const UPDATE_LINK_RATING_BY_ID_MUTATION = gql`
    mutation Link($id: ID!, $rating: Int!) {
        updateLink(input: { where: { id: $id }, data: { rating: $rating } }) {
            link {
                id
                rating
            }
        }
    }
`;

export default UPDATE_LINK_RATING_BY_ID_MUTATION;
