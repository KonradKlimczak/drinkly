import { Box, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RecipeIngredient } from 'generated/graphql';

type IngredientFormProps = {
  ingredient: Omit<RecipeIngredient, 'id'>;
};

export const IngredientForm = (props: IngredientFormProps) => {
  const { ingredient } = props;

  return null;
};
