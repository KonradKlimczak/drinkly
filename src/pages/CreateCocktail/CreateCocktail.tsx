import { memo, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CocktailInput, RecipeStep } from 'types';

import { CocktailForm } from './CocktailForm';
import { INITIAL_COCKTAIL } from './constants';
import { getRecipeStep } from './utils';

const CreateCocktailInner = () => {
  const [cocktail, setCocktail] = useState<CocktailInput>(INITIAL_COCKTAIL);

  const handleChangeName = useCallback((name: string) => {
    setCocktail((prev) => ({ ...prev, name }));
  }, []);

  const handleChangeStep = useCallback((step: RecipeStep) => {
    setCocktail((prev) => ({
      ...prev,
      recipe: prev.recipe.map((s) => {
        return s.id === step.id ? step : s;
      }),
    }));
  }, []);

  const handleAddStep = useCallback(() => {
    setCocktail((prev) => ({
      ...prev,
      recipe: [...prev.recipe, getRecipeStep()],
    }));
  }, []);

  const handleChangeImage = useCallback((image?: string) => {
    setCocktail((prev) => ({ ...prev, image }));
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Typography component="h1" variant="h5">
          Add Cocktail
        </Typography>
        <CocktailForm
          cocktail={cocktail}
          onChangeName={handleChangeName}
          onChangeStep={handleChangeStep}
          onAddStep={handleAddStep}
          onChangeImage={handleChangeImage}
        />
      </Box>
    </Container>
  );
};

export const CreateCocktail = memo(CreateCocktailInner);
