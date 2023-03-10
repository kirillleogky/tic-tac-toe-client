import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_PLAYER } from '../api/mutations/createPlayer';

export const useCreatePlayer = () => {
  const [createPlayerMutation, { loading }] = useMutation(CREATE_PLAYER, {
    onError: error => {
      toast.error(error.message);
    },
  });

  const createPlayer = async (
    playerName: string,
    onCreatedPlayer: (id: string) => void
  ) => {
    await createPlayerMutation({
      variables: {
        name: playerName,
      },
      onCompleted: async data => {
        const { id } = data?.insert_users?.returning[0] || {};

        if (id) {
          await onCreatedPlayer(id);
        }
      },
    });
  };

  return {
    createPlayer,
    isCreatePlayerLoading: loading,
  };
};
