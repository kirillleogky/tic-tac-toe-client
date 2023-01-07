import { gql } from '@apollo/client';

export const CREATE_PLAYER = gql`
  mutation CREATE_PLAYER($name: String) {
    insert_users(objects: { name: $name }) {
      returning {
        id
      }
    }
  }
`;
