import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { MAKE_MOVE } from '../api/mutations/makeMove';

export const useMakeMove = (
  setIsGameBoardLoading: (isGameBoardLoading: boolean) => void
) => {
  const [makeMoveMutation] = useMutation(MAKE_MOVE, {
    onError: error => {
      setIsGameBoardLoading(false);
      toast.error(error.message);
    },
  });

  return async (
    position: number,
    playerId: number,
    boardId: string | string[] | undefined
  ) => {
    await makeMoveMutation({
      variables: {
        position,
        user_id: playerId,
        board_id: boardId,
      },
    });
  };
};
