import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useSubscription } from '@apollo/client';
import { Grid, Modal, Box, Skeleton } from '@mui/material';
import { toast } from 'react-toastify';

import AddPlayerForm from '../shared/AddPlayerForm';
import BoardNav from './boardNav';
import WinnerBoard from '../WinnerBoard';
import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import getCurrentGameBoard from '../utils/getCurrentGameBoard';

import { winnerType } from '../types';
import { PLAYERS_MARKS } from '../enums';
import { COLORS } from '../../styles/variables';

import { MAKE_MOVE } from '../../api/mutations/makeMove';
import { CREATE_PLAYER } from '../../api/mutations/createPlayer';
import { SUBSCRIBE_GAME } from '../../api/subscriptions/subscribeGame';
import { JOIN_SECOND_PLAYER } from '../../api/mutations/joinSecondPlayer';

const Board = () => {
  const router = useRouter();

  const { createdPlayerId, boardId } = router.query || {};
  const [openPlayerForm, setOpenPlayerForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGameBoardLoading, setIsGameBoardLoading] = useState(false);
  const [playerId, setPlayerId] = useState(createdPlayerId);
  const [nextTurn, setNextTurn] = useState('');
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [isSecondPlayerInGame, setIsSecondPlayerInGame] = useState(false);
  const [playerWinner, setPlayerWinner] = useState<winnerType>();
  const [winningCombo, setWinningCombo] = useState<Number[]>([]);
  const handleOpenPlayerForm = () => setOpenPlayerForm(true);
  const handleClosePlayerForm = () => setOpenPlayerForm(false);

  const { loading: subscriptionLoading, error: subscriptionError } =
    useSubscription(SUBSCRIBE_GAME, {
      variables: { board_id: boardId },
      onData: ({ data }) => {
        const { moves, turn, user1, user2, winner, winning_combo } =
          data?.data?.boards || {};

        if (user2) setIsSecondPlayerInGame(true);
        if (winner) {
          setWinningCombo(
            winning_combo.map((position: string) => Number(position))
          );

          setTimeout(() => setPlayerWinner(winner), 5000);
        }

        setGameBoard(getCurrentGameBoard(user1, user2, gameBoard, moves));
        setNextTurn(turn);

        setIsGameBoardLoading(false);
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  const [makeMove] = useMutation(MAKE_MOVE, {
    onError: error => {
      setIsGameBoardLoading(false);
      toast.error(error.message);
    },
  });

  const [joinSecondPlayer] = useMutation(JOIN_SECOND_PLAYER, {
    onCompleted: data => {
      const { id } = data?.update_boards.returning[0] || {};

      if (id) {
        router.push(
          {
            pathname: `/[boardId]`,
            query: { boardId, createdPlayerId: playerId },
          },
          undefined,
          { shallow: true }
        );

        setIsLoading(false);
        handleClosePlayerForm();
      }
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
        setPlayerId(id);

        joinSecondPlayer({
          variables: {
            user_2_id: id,
            board_id: boardId,
          },
        });
      }
    },
    onError: error => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });
  const handleJoinGame = (playerName: string) => {
    setIsLoading(true);

    createPlayer({
      variables: {
        name: playerName,
      },
    });
  };

  const handleMakeMove = (position: number) => {
    setIsGameBoardLoading(true);

    makeMove({
      variables: {
        position: Number(position),
        user_id: Number(playerId),
        board_id: boardId,
      },
    });
  };

  useEffect(() => {
    if (!playerId) {
      handleOpenPlayerForm();
    }
  }, []);

  useEffect(() => {
    if (!subscriptionError && subscriptionLoading) {
      setIsGameBoardLoading(subscriptionLoading);
    }
  }, [subscriptionLoading, subscriptionError]);
  console.log(winningCombo);
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
          isLoading={isLoading}
          formSubmitLabel="Join game"
        />
      </Modal>
    </>
  );
};
export default Board;
