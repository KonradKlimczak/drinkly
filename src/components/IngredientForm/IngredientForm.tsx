import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RecipeIngredient } from 'generated/graphql';

type IngredientFormProps = {
  ingredient: Omit<RecipeIngredient, 'id'>;
};

export const IngredientForm = (props: IngredientFormProps) => {
  const { ingredient } = props;

  return (
    <>
      <TextField size="small" sx={{ width: 100, marginBottom: 1 }} label="Amout" />

      <FormControl size="small" fullWidth>
        <InputLabel id={`unit-label-${stepIndex}-${ingredientIndex}`}>Unit</InputLabel>

        <Select size="small" labelId={`unit-label-${stepIndex}-${ingredientIndex}`} label="Unit">
          <MenuItem value="MOST_POPULAR">ml</MenuItem>
          <MenuItem value="HIGHEST_RATING">drops</MenuItem>
        </Select>
      </FormControl>
      <TextField size="small" sx={{ width: 150 }} label="Ingredient" />
    </>
  );
};
