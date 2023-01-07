import { gql } from '@apollo/client';

export const GET_BOARD_GAME = gql`
  query GET_BOARD_GAME($board_id: uuid!) {
    boards_by_pk(id: $board_id) {
      id
      winner
    }
  }
`;
