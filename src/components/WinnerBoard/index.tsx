import { Grid, Typography } from '@mui/material';

import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import { winnerType } from '../types';
import { WINNER } from '../enums';
import { COLORS } from '../../styles/variables';

type WinnerBoardProps = {
  winner: winnerType;
};
const WinnerBoard = ({ winner }: WinnerBoardProps) => {
  const winnerIcon = {
    [WINNER.X]: <XIcon width={140} />,
    [WINNER.O]: <OIcon width={140} />,
    [WINNER.DRAW]: (
      <>
        <OIcon width={140} />
        <XIcon width={140} />
      </>
    ),
  };

  return (
    <Grid
      container
      sx={{
        height: '100%',
        backgroundColor: COLORS.white,
        borderRadius: '60px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item>{winnerIcon[winner]}</Grid>
      <Grid item>
        <Typography color="primary" variant="subtitle1">
          {winner === WINNER.DRAW ? 'Draw' : 'Win'}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default WinnerBoard;
