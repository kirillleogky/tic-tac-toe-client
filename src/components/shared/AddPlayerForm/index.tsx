import { forwardRef } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import CustomButton from '../CustomButton';

import { COLORS } from '../../../styles/variables';

type AddPlayerFormValues = {
  playerName: string;
};

type AddPlayerFormProps = {
  onSubmit: (playerName: string) => void;
  isLoading: boolean;
  formSubmitLabel: string;
};
const AddPlayerForm = forwardRef(
  ({ onSubmit, isLoading, formSubmitLabel }: AddPlayerFormProps) => {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        playerName: '',
      },
    });

    const onSubmitForm = ({ playerName }: AddPlayerFormValues) => {
      onSubmit(playerName);
    };

    return (
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: COLORS.white,
          border: `2px solid ${COLORS.lightOrange}`,
          borderRadius: 4,
          boxShadow: '0px 2px 4px rgba(88, 32, 0, 0.1)',
          p: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle1" color={COLORS.orange}>
          Type your name
        </Typography>
        <Controller
          name="playerName"
          control={control}
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: 'Must Contain Only Letters',
            },
          }}
          render={({ field, formState: { errors } }) => {
            const { message: errorMessage } = errors.playerName || {};

            return (
              <>
                <TextField
                  {...field}
                  color="primary"
                  error={!!errorMessage}
                  sx={{
                    mt: 5,
                  }}
                />
                {errorMessage && (
                  <Typography color={COLORS.red} variant="caption">
                    {errorMessage}
                  </Typography>
                )}
              </>
            );
          }}
        />
        <CustomButton
          label={formSubmitLabel}
          color="primary"
          size="huge"
          variant="outlined"
          onClick={handleSubmit(onSubmitForm)}
          customSxStyles={{
            mt: 5,
            width: '100%',
          }}
          isLoading={isLoading}
        />
      </Box>
    );
  }
);

AddPlayerForm.displayName = 'AddPlayerForm';
export default AddPlayerForm;
