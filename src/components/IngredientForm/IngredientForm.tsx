import { Box, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

import { RecipeIngredient } from 'generated/graphql';
import { ChangeEvent, SyntheticEvent, useCallback } from 'react';

type IngredientFormProps = {
  ingredient: Pick<RecipeIngredient, 'name' | 'optional' | 'amount' | 'unit'>;
  onChangeName: (value: string) => void;
  onChangeOptional: (value: boolean) => void;
  onChangeAmount: (value: string | number) => void;
  onChangeUnit: (value: string) => void;
};

export const IngredientForm = (props: IngredientFormProps) => {
  const { ingredient, onChangeName, onChangeOptional, onChangeAmount, onChangeUnit } = props;

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeName(event.target.value);
    },
    [onChangeName]
  );

  const handleChangeOptional = useCallback(
    (_event: SyntheticEvent, checked: boolean) => {
      onChangeOptional(checked);
    },
    [onChangeOptional]
  );

  const handleChangeAmount = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeAmount(event.target.value);
    },
    [onChangeAmount]
  );

  const handleChangeUnit = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeUnit(event.target.value);
    },
    [onChangeUnit]
  );

  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required label="Name" size="small" value={ingredient.name} onChange={handleChangeName} />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Required"
        value={!ingredient.optional}
        onChange={handleChangeOptional}
      />
      <TextField label="Amount" size="small" value={ingredient.amount ?? ''} onChange={handleChangeAmount} />
      <TextField label="Unit" size="small" value={ingredient.unit ?? ''} onChange={handleChangeUnit} />
    </Box>
  );
};
