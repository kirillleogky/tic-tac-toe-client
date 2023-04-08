import { playerType, playerMoveType } from '../types';
import { PLAYERS_MARKS } from '../types/enums';
const getCurrentGameBoard = (
  user1: playerType,
  user2: playerType | null,
  gameBoard: Array<string>,
  moves?: Array<playerMoveType>
) => {
  const { id: user1Id } = user1;
  const { id: user2Id } = user2 || {};

  if (!moves?.length) {
    return gameBoard;
  }

  const gameBoardCopy = [...gameBoard];

  moves.forEach(({ user_id, position }) => {
    let mark = '';

    if (user_id === user1Id) {
      mark = PLAYERS_MARKS.X;
    } else if (user_id === user2Id) {
      mark = PLAYERS_MARKS.O;
    }

    gameBoardCopy[position] = mark;
  });

  return gameBoardCopy;
};

export default getCurrentGameBoard;
