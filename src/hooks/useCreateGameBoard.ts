import {useRouter} from 'next/router';
import {useMutation} from '@apollo/client';
import {toast} from 'react-toastify';

import {CREATE_GAME_BOARD} from '../api/mutations/createGameBoard';

export const useCreateGameBoard = (
  setIsLoading: (isLoading: boolean) => void
) => {
  const router = useRouter();

  const [createGameBoardMutation] = useMutation(CREATE_GAME_BOARD, {
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  return async (createdPlayerId: string) => {
    const {data} = await createGameBoardMutation({
      variables: {
        user_id: createdPlayerId,
      },
    });

    if (data) {
      const {id} = data?.insert_boards.returning[0];

      router.push({
        pathname: `/[boardId]`,
        query: {boardId: id, createdPlayerId},
      });
    }
  };
};
