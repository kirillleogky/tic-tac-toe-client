import { graphql } from '../../gql';

export const CREATE_PLAYER = graphql(`
  mutation CREATE_PLAYER($name: String) {
    insert_users(objects: { name: $name }) {
      returning {
        id
      }
    }
  }
`);
