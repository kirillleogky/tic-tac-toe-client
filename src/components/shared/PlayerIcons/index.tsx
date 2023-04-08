import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import { WINNER } from '../../../types/enums';
import { IconSize } from '../../../styles/variables';

export const XPlayerIcon = <XIcon width={IconSize.large} />;
export const OPlayerIcon = <OIcon width={IconSize.large} />;

export const winnerIcon = {
  [WINNER.X]: XPlayerIcon,
  [WINNER.O]: OPlayerIcon,
  [WINNER.DRAW]: (
    <>
      {OPlayerIcon}
      {XPlayerIcon}
    </>
  ),
};
