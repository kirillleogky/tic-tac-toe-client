import { playerType, playerMoveType } from '../types';
import { PLAYERS_MARKS } from '../enums';
const getCurrentGameBoard = (
  user1: playerType,
  user2: playerType | null,
  gameBoard: Array<string>,
  moves?: Array<playerMoveType>
) => {
  const { id: user1Id } = user1 || {};
  const { id: user2Id } = user2 || {};

  const gameBoardCopy = [...gameBoard];

  if (!moves || !moves.length) return gameBoardCopy;

  moves.forEach(playerMove => {
    const { user_id, position } = playerMove;
    const x = user_id === user1Id && PLAYERS_MARKS.X;
    const o = user_id === user2Id && PLAYERS_MARKS.O;

    gameBoardCopy[position] = x || o || '';
  });

  return gameBoardCopy;
};

export default getCurrentGameBoard;
