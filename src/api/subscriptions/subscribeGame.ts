import { graphql } from '../../gql';

export const SUBSCRIBE_GAME = graphql(`
  subscription SUBSCRIBE_GAME($board_id: uuid!) {
    boards: boards_by_pk(id: $board_id) {
      id
      turn
      winner
      winning_combo
      moves(order_by: { id: desc }) {
        id
        position
        user_id
      }
      user1 {
        name
        id
      }
      user2 {
        name
        id
      }
    }
  }
`);
