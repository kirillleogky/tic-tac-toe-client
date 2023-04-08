import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { MAKE_MOVE } from '../api/mutations/makeMove';

export const useMakeMove = () => {
  const [makeMoveMutation, { loading }] = useMutation(MAKE_MOVE, {
    onError: error => {
      toast.error(error.message);
    },
  });

  const makeMove = async (
    position: number,
    playerId: number,
    boardId: string
  ) => {
    await makeMoveMutation({
      variables: {
        position,
        user_id: playerId,
        board_id: boardId,
      },
    });
  };

  return {
    makeMove,
    isMakeMoveLoading: loading,
  };
};
