import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { JOIN_SECOND_PLAYER } from '../api/mutations/joinSecondPlayer';

export const useJoinSecondPlayer = () => {
  const router = useRouter();

  const [joinSecondPlayerMutation, { loading }] = useMutation(
    JOIN_SECOND_PLAYER,
    {
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const joinSecondPlayer = async (
    secondPlayerId: number,
    boardId: string | string[] | undefined,
    onJoinSecondPlayer: () => void
  ) => {
    await joinSecondPlayerMutation({
      variables: {
        user_2_id: secondPlayerId,
        board_id: boardId,
      },
      onCompleted: data => {
        const { id } = data?.update_boards?.returning[0] || {};

        if (id) {
          router.push(
            {
              pathname: `/[boardId]`,
              query: { boardId, createdPlayerId: secondPlayerId },
            },
            undefined,
            { shallow: true }
          );
          onJoinSecondPlayer();
        }
      },
    });
  };

  return {
    joinSecondPlayer,
    isJoinSecondPlayerLoading: loading,
  };
};
