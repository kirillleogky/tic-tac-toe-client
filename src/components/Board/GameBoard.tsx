import { Box, Grid } from '@mui/material';

import { PLAYERS_MARKS } from '../../types/enums';
import { BorderRadius, COLORS } from '../../styles/variables';
import { OPlayerIcon, XPlayerIcon } from '../shared/PlayerIcons';

type GameBoardType = {
  gameBoard: Array<string>;
  winningCombo: Number[];
  handleMakeMove: (position: number) => void;
};

const TOP_LEFT_MARK_INDEX = 0;
const TOP_RIGHT_MARK_INDEX = 2;
const BOTTOM_LEFT_MARK_INDEX = 6;
const BOTTOM_RIGHT_MARK_INDEX = 8;
const GameBoard = ({
  gameBoard,
  winningCombo,
  handleMakeMove,
}: GameBoardType) => (
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
            borderTopLeftRadius:
              index === TOP_LEFT_MARK_INDEX ? BorderRadius.extraLarge : 0,
            borderTopRightRadius:
              index === TOP_RIGHT_MARK_INDEX ? BorderRadius.extraLarge : 0,
            borderBottomLeftRadius:
              index === BOTTOM_LEFT_MARK_INDEX ? BorderRadius.extraLarge : 0,
            borderBottomRightRadius:
              index === BOTTOM_RIGHT_MARK_INDEX ? BorderRadius.extraLarge : 0,
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
          {label === PLAYERS_MARKS.X && XPlayerIcon}
          {label === PLAYERS_MARKS.O && OPlayerIcon}
        </Box>
      </Grid>
    ))}
    <Box />
  </Grid>
);
export default GameBoard;
