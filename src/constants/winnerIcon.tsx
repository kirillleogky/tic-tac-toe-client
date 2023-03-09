import XIcon from 'public/icons/x.svg';
import OIcon from 'public/icons/o.svg';

import { WINNER } from '../types/enums';

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

export default winnerIcon;
