import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_PLAYER } from '../api/mutations/createPlayer';

export const useCreatePlayer = (setIsLoading: (isLoading: boolean) => void) => {
  const [createPlayerMutation] = useMutation(CREATE_PLAYER, {
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  return async (playerName: string, onCreatedPlayer: (id: string) => void) => {
    const { data } = await createPlayerMutation({
      variables: {
        name: playerName,
      },
    });

    if (data) {
      const { id } = data?.insert_users.returning[0];

      if (id) {
        await onCreatedPlayer(id);
      }
    }
  };
};
