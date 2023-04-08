import { GetServerSideProps } from 'next';
import apolloClient from '../../api/apollo-client';
import { GET_BOARD_GAME } from '../../api/queries/getBoardGame';
import NotFound from '../../components/NotFound';
import Board from '../../components/Board';

type GameBoardProps = {
  fetchedBoardGame: string;
};
const GameBoard = ({ fetchedBoardGame }: GameBoardProps) =>
  !fetchedBoardGame ? <NotFound /> : <Board />;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;
  const { boardId } = query || {};

  let fetchedBoardGame = '';

  if (boardId) {
    const { data } = await apolloClient.query({
      query: GET_BOARD_GAME,
      variables: {
        board_id: boardId,
      },
    });

    const { id, winner } = data?.boards_by_pk || {};

    if (id && winner === null) {
      fetchedBoardGame = id;
    }
  }

  return {
    props: {
      fetchedBoardGame,
    },
  };
};
export default GameBoard;
