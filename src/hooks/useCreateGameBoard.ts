import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_GAME_BOARD } from '../api/mutations/createGameBoard';

export const useCreateGameBoard = () => {
  const router = useRouter();

  const [createGameBoardMutation, { loading }] = useMutation(
    CREATE_GAME_BOARD,
    {
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const createGameBoard = async (createdPlayerId: number) => {
    await createGameBoardMutation({
      variables: {
        user_id: createdPlayerId,
      },
      onCompleted: data => {
        const { id } = data?.insert_boards?.returning[0] || {};

        if (id) {
          router.push({
            pathname: `/[boardId]`,
            query: { boardId: id, createdPlayerId },
          });
        }
      },
    });
  };

  return {
    createGameBoard,
    isCreateGameBoardLoading: loading,
  };
};
