import { gql } from '@apollo/client';

export const MAKE_MOVE = gql`
  mutation MAKE_MOVE($board_id: String!, $position: Int!, $user_id: Int!) {
    makeMove(board_id: $board_id, position: $position, user_id: $user_id) {
      success
    }
  }
`;
