import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Standby } from 'components/Standby/Standby';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { CocktailInput } from 'types';
import { CocktailForm } from './CocktailForm';
import { INITIAL_COCKTAIL } from './constants';

const CreateCocktailInner = () => {
  const [cocktail, setCocktail] = useState<CocktailInput>(INITIAL_COCKTAIL);
  const { user } = useAuth0();

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
          onChangeName={handleChangeName}
          onChangeAction={handleChangeAction}
          onAddIngredient={handleAddIngredient}
          onAddStep={handleAddStep}
        />
      </Box>
    </Container>
  );
};

export const CreateCocktail = withAuthenticationRequired(memo(CreateCocktailInner), {
  onRedirecting: Standby,
});
