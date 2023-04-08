import { Button, SxProps } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { BorderRadius } from '../../../styles/variables';

type ButtonProps = {
  label: string;
  startIcon?: JSX.Element;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  variant: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large' | 'huge';
  onClick?: Function;
  customSxStyles?: SxProps;
  isLoading?: boolean;
  disabled?: boolean;
};
const CustomButton = ({
  startIcon,
  variant,
  size,
  label,
  onClick,
  customSxStyles,
  isLoading,
  disabled,
  color,
}: ButtonProps) => {
  const handleClick = () => onClick && onClick();

  return isLoading ? (
    <LoadingButton
      loading={isLoading}
      variant={variant}
      startIcon={startIcon}
      size={size}
      disableRipple
      sx={{
        borderRadius: BorderRadius.large,
        textTransform: 'none',
        ...customSxStyles,
      }}
      onClick={handleClick}
      color={color}
    >
      Submit
    </LoadingButton>
  ) : (
    <Button
      variant={variant}
      startIcon={startIcon}
      size={size}
      disableRipple
      sx={{
        borderRadius: BorderRadius.large,
        textTransform: 'none',
        ...customSxStyles,
      }}
      onClick={handleClick}
      disabled={disabled}
      color={color}
    >
      {label}
    </Button>
  );
};
export default CustomButton;
