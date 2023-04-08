import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Modal, Skeleton } from '@mui/material';

import AddPlayerForm from '../shared/AddPlayerForm';
import BoardNav from './BoardNav';
import WinnerBoard from '../WinnerBoard';
import GameBoard from './GameBoard';

import { useCreatePlayer } from '../../hooks/useCreatePlayer';
import { useMakeMove } from '../../hooks/useMakeMove';
import { useJoinSecondPlayer } from '../../hooks/useJoinSecondPlayer';
import { useSubscribeGame } from '../../hooks/useSubscribeGame';

import { INITIAL_GAME_BOARD_LENGTH } from '../../constants';

import { boardPageQueryType, winnerType } from '../../types';
import { BorderRadius, COLORS } from '../../styles/variables';
const Board = () => {
  const router = useRouter();

  const { createdPlayerId, boardId } =
    (router.query as boardPageQueryType) || {};
  const [openPlayerForm, setOpenPlayerForm] = useState(false);
  const [isGameBoardLoading, setIsGameBoardLoading] = useState(false);
  const [playerId, setPlayerId] = useState(Number(createdPlayerId));
  const [nextTurn, setNextTurn] = useState('');
  const [gameBoard, setGameBoard] = useState(() =>
    Array(INITIAL_GAME_BOARD_LENGTH).fill('')
  );
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
              <GameBoard
                gameBoard={gameBoard}
                handleMakeMove={handleMakeMove}
                winningCombo={winningCombo}
              />
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
              borderRadius: BorderRadius.extraLarge,
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
