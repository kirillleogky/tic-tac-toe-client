import { useState } from 'react';
import { Grid, Modal } from '@mui/material';

import CustomButton from '../shared/CustomButton';
import AddPlayerForm from '../shared/AddPlayerForm';
import Logo from 'public/icons/logo.svg';
import GamingPad from 'public/icons/gaming-pad.svg';

import { useCreatePlayer } from '../../hooks/useCreatePlayer';
import { useCreateGameBoard } from '../../hooks/useCreateGameBoard';

const Main = () => {
  const [openPlayerForm, setOpenPlayerForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createPlayer = useCreatePlayer(setIsLoading);
  const createGameBoard = useCreateGameBoard(setIsLoading);

  const handleOpenPlayerForm = () => setOpenPlayerForm(true);
  const handleClosePlayerForm = () => setOpenPlayerForm(false);

  const onCreatedPlayer = async (id: string) => {
    await createGameBoard(id);
  };

  const handleStartGame = async (playerName: string) => {
    setIsLoading(true);

    await createPlayer(playerName, onCreatedPlayer);
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
