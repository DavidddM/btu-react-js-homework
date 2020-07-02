import gql from "graphql-tag";

const UPDATE_USER_LINKS_REL_MUTATION = gql`
    mutation User($id: ID!, $links: [ID]!) {
        updateUser(input: { where: { id: $id }, data: { links: $links } }) {
            user {
                id
            }
        }
    }
`;

export default UPDATE_USER_LINKS_REL_MUTATION;
