import { useSubscription } from '@apollo/client';
import { toast } from 'react-toastify';

import getCurrentGameBoard from '../utils/getCurrentGameBoard';

import { winnerType } from '../types';

import { SUBSCRIBE_GAME } from '../api/subscriptions/subscribeGame';

export const useSubscribeGame = (
  setIsSecondPlayerInGame: (isSecondPlayerInGame: boolean) => void,
  setWinningCombo: (winningCombo: Number[]) => void,
  boardId: string | string[] | undefined,
  setPlayerWinner: (playerWinner: winnerType) => void,
  gameBoard: Array<string>,
  setGameBoard: (gameBoard: Array<string>) => void,
  setNextTurn: (nextTurn: string) => void,
  setIsGameBoardLoading: (isGameBoardLoading: boolean) => void
) =>
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
