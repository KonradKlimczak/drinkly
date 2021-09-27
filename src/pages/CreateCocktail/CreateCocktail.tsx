import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { CocktailInput } from 'types';
import { CocktailForm } from './CocktailForm';

export const CreateCocktail = () => {
  const [cocktail, setCocktail] = useState<CocktailInput>({
    name: '',
    recipe: [
      {
        action: 'shake',
        ingredients: [
          {
            amount: '',
            name: '',
          },
        ],
      },
    ],
  });
  const user = useSelector((state: RootState) => state.user.user);

  const handleChangeName = useCallback((name: string) => {
    setCocktail((prev) => ({
      ...prev,
      name,
    }));
  }, []);

  const handleAddIngredient = useCallback((stepIndex: number) => {
    setCocktail((prev) => ({
      ...prev,
      recipe: prev.recipe.map((step, index) => {
        if (index === stepIndex) {
          return { ...step, ingredients: [...step.ingredients, { name: '', amount: '' }] };
        }
        return step;
      }),
    }));
  }, []);

  const handleChangeAction = useCallback((stepIndex: number, action: string) => {
    setCocktail((prev) => ({
      ...prev,
      recipe: prev.recipe.map((step, index) => {
        if (index === stepIndex) {
          return { ...step, action };
        }
        return step;
      }),
    }));
  }, []);

  const handleAddStep = useCallback(() => {
    setCocktail((prev) => ({
      ...prev,
      recipe: [
        ...prev.recipe,
        {
          action: 'pour',
          ingredients: [
            {
              amount: '',
              name: '',
            },
          ],
        },
      ],
    }));
  }, []);

  if (!user.isLogged) {
    return null;
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Add Cocktail
        </Typography>
        <CocktailForm
          cocktail={cocktail}
          user={user}
          onChangeName={handleChangeName}
          onChangeAction={handleChangeAction}
          onAddIngredient={handleAddIngredient}
          onAddStep={handleAddStep}
        />
      </Box>
    </Container>
  );
};
