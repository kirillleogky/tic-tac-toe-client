import { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Modal } from '@mui/material';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import CustomButton from '../shared/CustomButton';
import AddPlayerForm from '../shared/AddPlayerForm';
import Logo from 'public/icons/logo.svg';
import GamingPad from 'public/icons/gaming-pad.svg';

import { CREATE_PLAYER } from '../../api/mutations/createPlayer';
import { CREATE_GAME_BOARD } from '../../api/mutations/createGameBoard';

const Main = () => {
  const router = useRouter();

  const [openPlayerForm, setOpenPlayerForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [createdPlayerId, setCreatedPlayerId] = useState(null);
  const handleOpenPlayerForm = () => setOpenPlayerForm(true);
  const handleClosePlayerForm = () => setOpenPlayerForm(false);

  const [createGameBoard] = useMutation(CREATE_GAME_BOARD, {
    onCompleted: data => {
      const { id } = data?.insert_boards.returning[0];

      router.push({
        pathname: `/[boardId]`,
        query: { boardId: id, createdPlayerId },
      });
    },
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  const [createPlayer] = useMutation(CREATE_PLAYER, {
    onCompleted: data => {
      const { id } = data?.insert_users.returning[0];

      if (id) {
        setCreatedPlayerId(id);

        createGameBoard({
          variables: {
            user_id: id,
          },
        });
      }
    },
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  const handleStartGame = (playerName: string) => {
    setIsLoading(true);

    createPlayer({
      variables: {
        name: playerName,
      },
    });
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        <Grid container item xs={12} justifyContent="center">
          <Logo
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '887px',
              maxHeight: '228px',
            }}
          />
        </Grid>
        <Grid container item xs={6} justifyContent="center">
          <CustomButton
            startIcon={<GamingPad />}
            label="New game"
            color="primary"
            size="huge"
            variant="outlined"
            onClick={handleOpenPlayerForm}
          />
        </Grid>
      </Grid>
      <Modal open={openPlayerForm} onClose={handleClosePlayerForm}>
        <AddPlayerForm
          onSubmit={handleStartGame}
          isLoading={isLoading}
          formSubmitLabel="Start game"
        />
      </Modal>
    </>
  );
};
export default Main;
