import AddIcon from '@mui/icons-material/Add';
import { FormControl, IconButton, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
    <>
      <ActionButton stepIndex={stepIndex} action={step.action} onChange={onChangeAction} />
      <Box
        sx={{
          justifySelf: 'start',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {step.ingredients.map((ingredient, ingredientIndex) => (
          <Paper
            key={ingredient.name}
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 1,
            }}
          >
            <div>
              <TextField size="small" sx={{ width: 100, marginBottom: 1 }} label="Amout" />

              <FormControl size="small" fullWidth>
                <InputLabel id={`unit-label-${stepIndex}-${ingredientIndex}`}>Unit</InputLabel>

                <Select size="small" labelId={`unit-label-${stepIndex}-${ingredientIndex}`} label="Unit">
                  <MenuItem value="MOST_POPULAR">ml</MenuItem>
                  <MenuItem value="HIGHEST_RATING">drops</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField size="small" sx={{ width: 150 }} label="Ingredient" />
          </Paper>
        ))}
        <IconButton color="primary" sx={{ marginLeft: 1 }} onClick={handleAddIngredient}>
          <AddIcon />
        </IconButton>
      </Box>
    </>
  );
};
