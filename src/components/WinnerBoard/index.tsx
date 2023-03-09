import { Grid, Typography } from '@mui/material';

import winnerIcon from '../../constants/winnerIcon';

import { winnerType } from '../../types';
import { WINNER } from '../../types/enums';
import { COLORS } from '../../styles/variables';

type WinnerBoardProps = {
  winner: winnerType;
};
const WinnerBoard = ({ winner }: WinnerBoardProps) => (
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
export default WinnerBoard;
