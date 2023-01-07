import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';

import CustomButton from '../shared/CustomButton';

import { COLORS } from '../../styles/variables';

const NotFound = () => {
  const router = useRouter();
  const moveMainPage = () => {
    router.push('/');
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid container item xs={12} justifyContent="center" mb={4}>
        <Typography color={COLORS.orange} variant="h1">
          Current page doesn&apos;t exist
        </Typography>
      </Grid>
      <Grid container item xs={6} justifyContent="center">
        <CustomButton
          label="Move to main page"
          color="primary"
          size="huge"
          variant="outlined"
          onClick={moveMainPage}
          customSxStyles={{
            p: 3,
          }}
        />
      </Grid>
    </Grid>
  );
};
export default NotFound;
