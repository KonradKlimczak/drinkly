import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RecipeIngredient } from 'generated/graphql';

type IngredientProps = {
  ingredient: Omit<RecipeIngredient, 'id'>;
};

export const Ingredient = (props: IngredientProps) => {
  const { ingredient } = props;

  return (
    <Box sx={{ padding: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle2" component="div">
        {ingredient.name}
      </Typography>
      <Typography variant="body2" component="div" display="flex" sx={{ fontSize: '1.25rem' }}>
        {ingredient.amount} {ingredient.unit}
      </Typography>
    </Box>
  );
};
