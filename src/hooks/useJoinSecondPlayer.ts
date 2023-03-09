import {useRouter} from 'next/router';
import {useMutation} from '@apollo/client';
import {toast} from 'react-toastify';

import {JOIN_SECOND_PLAYER} from '../api/mutations/joinSecondPlayer';

export const useJoinSecondPlayer = (
  setIsLoading: (isLoading: boolean) => void
) => {
  const router = useRouter();

  const [joinSecondPlayerMutation] = useMutation(JOIN_SECOND_PLAYER, {
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  return async (
    secondPlayerId: string,
    boardId: string | string[] | undefined,
    onClosePlayerForm: () => void
  ) => {
    const {data} = await joinSecondPlayerMutation({
      variables: {
        user_2_id: secondPlayerId,
        board_id: boardId,
      },
    });

    if (data) {
      const {id} = data?.update_boards.returning[0] || {};

      if (id) {
        router.push(
          {
            pathname: `/[boardId]`,
            query: {boardId, createdPlayerId: secondPlayerId},
          },
          undefined,
          {shallow: true}
        );
        onClosePlayerForm();
      }
    }
  };
};
