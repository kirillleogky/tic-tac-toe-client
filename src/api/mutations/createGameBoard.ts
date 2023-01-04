import { gql } from '@apollo/client';

export const CREATE_GAME_BOARD = gql`
  mutation CREATE_GAME_BOARD($user_id: Int) {
    insert_boards(objects: [{ user_1_id: $user_id, turn: "x" }]) {
      returning {
        id
      }
    }
  }
`;
