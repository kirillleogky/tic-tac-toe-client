import { Button, SxProps } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

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
  return isLoading ? (
    <LoadingButton
      loading={isLoading}
      variant={variant}
      startIcon={startIcon}
      size={size}
      disableRipple
      sx={{
        borderRadius: 50,
        textTransform: 'none',
        ...customSxStyles,
      }}
      onClick={() => onClick && onClick()}
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
        borderRadius: 50,
        textTransform: 'none',
        ...customSxStyles,
      }}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      color={color}
    >
      {label}
    </Button>
  );
};
export default CustomButton;
