import { graphql } from '../../gql';

export const GET_BOARD_GAME = graphql(`
  query GET_BOARD_GAME($board_id: uuid!) {
    boards_by_pk(id: $board_id) {
      id
      winner
    }
  }
`);
