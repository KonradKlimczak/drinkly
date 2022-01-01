import AddIcon from '@mui/icons-material/Add';
import { FormControl, IconButton, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Ingredient } from 'components/Ingredient';
import { useCallback } from 'react';
import { RecipeStep } from 'types';
import { ActionButton } from './ActionButton';

type RecipeStepInputsProps = {
  stepIndex: number;
  step: RecipeStep;
  onChangeAction: (stepIndex: number, action: string) => void;
  onAddIngredient: (stepIndex: number) => void;
};

export const RecipeStepInputs = (props: RecipeStepInputsProps) => {
  const { stepIndex, step, onChangeAction, onAddIngredient } = props;

  const handleAddIngredient = useCallback(() => {
    onAddIngredient(stepIndex);
  }, [onAddIngredient]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ActionButton stepIndex={stepIndex} action={step.action} onChange={onChangeAction} />
      <Box
        sx={{
          justifySelf: 'start',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {step.ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
        <IconButton color="primary" sx={{ marginLeft: 1 }} onClick={handleAddIngredient}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
