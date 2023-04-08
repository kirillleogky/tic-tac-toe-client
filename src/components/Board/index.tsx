import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Modal, Skeleton } from '@mui/material';

import AddPlayerForm from '../shared/AddPlayerForm';
import BoardNav from './BoardNav';
import WinnerBoard from '../WinnerBoard';
import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import { useCreatePlayer } from '../../hooks/useCreatePlayer';
import { useMakeMove } from '../../hooks/useMakeMove';
import { useJoinSecondPlayer } from '../../hooks/useJoinSecondPlayer';
import { useSubscribeGame } from '../../hooks/useSubscribeGame';

import { boardPageQueryType, winnerType } from '../../types';
import { PLAYERS_MARKS } from '../../types/enums';
import { COLORS } from '../../styles/variables';
const Board = () => {
  const router = useRouter();

  const { createdPlayerId, boardId } =
    (router.query as boardPageQueryType) || {};
  const [openPlayerForm, setOpenPlayerForm] = useState(false);
  const [isGameBoardLoading, setIsGameBoardLoading] = useState(false);
  const [playerId, setPlayerId] = useState(Number(createdPlayerId));
  const [nextTurn, setNextTurn] = useState('');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [isSecondPlayerInGame, setIsSecondPlayerInGame] = useState(false);
  const [playerWinner, setPlayerWinner] = useState<winnerType>();
  const [winningCombo, setWinningCombo] = useState<Number[]>([]);

  const { joinSecondPlayer, isJoinSecondPlayerLoading } = useJoinSecondPlayer();
  const { createPlayer, isCreatePlayerLoading } = useCreatePlayer();
  const { makeMove, isMakeMoveLoading } = useMakeMove();
  const { loading: isBoardSubscriptionLoading, error: boardSubscriptionError } =
    useSubscribeGame(
      setIsSecondPlayerInGame,
      setWinningCombo,
      boardId,
      setPlayerWinner,
      gameBoard,
      setGameBoard,
      setNextTurn
    );
  const handleOpenPlayerForm = () => setOpenPlayerForm(true);
  const handleClosePlayerForm = () => setOpenPlayerForm(false);

  const onCreatedPlayer = async (id: number) => {
    setPlayerId(id);

    await joinSecondPlayer(id, boardId, handleClosePlayerForm);
  };
  const handleJoinGame = async (playerName: string) => {
    await createPlayer(playerName, onCreatedPlayer);
  };

  const handleMakeMove = async (position: number) => {
    await makeMove(Number(position), Number(playerId), boardId);
  };

  useEffect(() => {
    const isLoading =
      isJoinSecondPlayerLoading ||
      isCreatePlayerLoading ||
      isMakeMoveLoading ||
      isBoardSubscriptionLoading;

    if (!boardSubscriptionError) {
      setIsGameBoardLoading(isLoading);
    }
  }, [
    isJoinSecondPlayerLoading,
    isCreatePlayerLoading,
    isMakeMoveLoading,
    isBoardSubscriptionLoading,
    boardSubscriptionError,
  ]);

  useEffect(() => {
    if (!playerId) {
      handleOpenPlayerForm();
    }
  }, []);

  return (
    <>
      <Box width="100%">
        {!isGameBoardLoading ? (
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: '660px',
              height: '660px',
              m: '0 auto',
            }}
          >
            {playerWinner ? (
              <WinnerBoard winner={playerWinner} />
            ) : (
              <Grid
                container
                spacing={'2px'}
                sx={{
                  height: '100%',
                  position: 'relative',
                }}
              >
                {gameBoard.map((label, index) => (
                  <Grid item xs={4} key={index} height="220px">
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: index === 0 ? '60px' : 0,
                        borderTopRightRadius: index === 2 ? '60px' : 0,
                        borderBottomLeftRadius: index === 6 ? '60px' : 0,
                        borderBottomRightRadius: index === 8 ? '60px' : 0,
                        WebkitAnimation: winningCombo.includes(index)
                          ? 'successBlink 1s infinite'
                          : '',
                        animation: winningCombo.includes(index)
                          ? 'successBlink 1s infinite'
                          : '',
                        '@-webkit-keyframes successBlink': {
                          '0%, 49%': {
                            backgroundColor: COLORS.white,
                          },
                          '50%, 100%': {
                            backgroundColor: COLORS.green,
                          },
                        },
                        ':hover': {
                          cursor: 'pointer',
                          backgroundColor: COLORS.extraLightBlue,
                        },
                        ':active': {
                          cursor: 'pointer',
                          backgroundColor: COLORS.lightBlue,
                        },
                      }}
                      onClick={() => handleMakeMove(index)}
                    >
                      {label === PLAYERS_MARKS.X && <XIcon width="140px" />}
                      {label === PLAYERS_MARKS.O && <OIcon width="140px" />}
                    </Box>
                  </Grid>
                ))}
                <Box />
              </Grid>
            )}
          </Box>
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={660}
            height={660}
            sx={{
              backgroundColor: COLORS.lightBlue,
              m: '0 auto',
              borderRadius: '60px',
            }}
          />
        )}
        <BoardNav
          isSecondPlayerInGame={isSecondPlayerInGame}
          winningCombo={!!winningCombo.length}
          nextTurn={nextTurn}
        />
      </Box>
      <Modal open={openPlayerForm} onClose={handleClosePlayerForm}>
        <AddPlayerForm
          onSubmit={handleJoinGame}
          isLoading={isJoinSecondPlayerLoading || isCreatePlayerLoading}
          formSubmitLabel="Join game"
        />
      </Modal>
    </>
  );
};
export default Board;
