import { gql } from '@apollo/client';

export const JOIN_SECOND_PLAYER = gql`
  mutation JOIN_SECOND_PLAYER($user_2_id: Int, $board_id: uuid!) {
    update_boards(
      where: {
        id: { _eq: $board_id }
        user_2_id: { _is_null: true }
        user_1_id: { _neq: $user_2_id }
      }
      _set: { user_2_id: $user_2_id }
    ) {
      returning {
        id
        turn
      }
    }
  }
`;
