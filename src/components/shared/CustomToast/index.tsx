import { ToastContainer } from 'react-toastify';
import { styled } from '@mui/system';

import { COLORS } from '../../../styles/variables';

const CustomToast = styled(ToastContainer)({
  '& .Toastify__toast': {
    color: COLORS.white,
    textAlign: 'center',

    '& .Toastify__toast-body > div:last-child': {
      wordBreak: 'break-word',
    },
  },
  '& .Toastify__toast--error': {
    background: COLORS.red,
  },
  '& .Toastify__toast--success': {
    background: COLORS.green,
  },
  '& .Toastify__toast-icon': {
    display: 'none',
  },
  '& .Toastify__close-button': {
    '& svg': {
      fill: COLORS.white,
    },
  },
});

export default CustomToast;
