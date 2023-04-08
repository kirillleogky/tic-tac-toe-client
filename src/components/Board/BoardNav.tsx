import { useState } from 'react';
import { Grid } from '@mui/material';

import FaceWink from 'public/icons/face-wink.svg';
import FaceSmile from 'public/icons/face-smile.svg';
import CopyLink from 'public/icons/copy-link.svg';
import CopiedLink from 'public/icons/copied-link.svg';
import CustomButton from '../shared/CustomButton';
import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import { PLAYERS_MARKS } from '../../types/enums';
import { IconSize } from '../../styles/variables';

type BoardNavProps = {
  isSecondPlayerInGame: boolean;
  nextTurn: string;
  winningCombo: boolean;
};
const BoardNav = ({
  isSecondPlayerInGame,
  nextTurn,
  winningCombo,
}: BoardNavProps) => {
  const [isGameLinkCopied, setIsGameLinkCopied] = useState(false);

  const copyLink = () => {
    const { origin, pathname } = window.location;

    navigator.clipboard.writeText(origin + pathname);
    setIsGameLinkCopied(true);
  };

  return (
    <Grid
      container
      spacing={2}
      mt={2}
      justifyContent="center"
      alignItems="center"
    >
      {isSecondPlayerInGame ? (
        <>
          <Grid item minWidth="82px">
            {nextTurn === PLAYERS_MARKS.X && !winningCombo && (
              <XIcon width={IconSize.medium} />
            )}
          </Grid>
          <Grid item>
            <CustomButton
              label="2 players in the game"
              color="secondary"
              size="huge"
              variant="outlined"
              startIcon={
                <>
                  <FaceWink />
                  <FaceSmile />
                </>
              }
              disabled
            />
          </Grid>
          <Grid item minWidth="82px">
            {nextTurn === PLAYERS_MARKS.O && !winningCombo && (
              <OIcon width={IconSize.medium} />
            )}
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <CustomButton
              label="1 player in the game"
              color="secondary"
              size="huge"
              variant="outlined"
              startIcon={<FaceWink />}
              disabled
            />
          </Grid>
          <Grid item>
            <CustomButton
              label={isGameLinkCopied ? 'Link copied' : 'Copy game link'}
              color={isGameLinkCopied ? 'success' : 'primary'}
              size="huge"
              variant="outlined"
              startIcon={isGameLinkCopied ? <CopiedLink /> : <CopyLink />}
              onClick={copyLink}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default BoardNav;
