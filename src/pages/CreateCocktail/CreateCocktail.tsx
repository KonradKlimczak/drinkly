import { withAuthenticationRequired } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Standby } from 'components/Standby/Standby';
import { memo, useCallback, useState } from 'react';
import { CocktailInput, Ingredient } from 'types';
import { CocktailForm } from './CocktailForm';
import { INITIAL_COCKTAIL } from './constants';
import { IngredientModal } from './IngredientModal';
import { addIngredient } from './utils';

type IngredientModal =
  | {
      kind: 'Closed';
    }
  | {
      kind: 'Add';
      stepIndex: number;
    }
  | {
      kind: 'Edit';
      stepIndex: number;
      ingredient: Ingredient;
    };

const CreateCocktailInner = () => {
  const [cocktail, setCocktail] = useState<CocktailInput>(INITIAL_COCKTAIL);
  const [editIngredient, setEditIngredient] = useState<IngredientModal>({ kind: 'Closed' });

  const handleChangeName = useCallback((name: string) => {
    setCocktail((prev) => ({ ...prev, name }));
  }, []);

  const handleAddIngredient = useCallback((stepIndex: number) => {
    setEditIngredient({ kind: 'Add', stepIndex });
  }, []);

  const handleSaveIngredient = useCallback(
    (ingredient: Ingredient) => {
      if (editIngredient.kind !== 'Closed') {
        const { stepIndex } = editIngredient;
        setCocktail((prev) => addIngredient(prev, ingredient, stepIndex));
        setEditIngredient({ kind: 'Closed' });
      }
    },
    [editIngredient]
  );

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
      recipe: [...prev.recipe, { action: 'pour', ingredients: [{ amount: '', name: '' }] }],
    }));
  }, []);

  const handleChangeImage = useCallback((image?: string) => {
    setCocktail((prev) => ({ ...prev, image }));
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
          onChangeImage={handleChangeImage}
        />
        {editIngredient.kind !== 'Closed' && (
          <IngredientModal
            initialIngredient={editIngredient.kind === 'Edit' ? editIngredient.ingredient : undefined}
            onClose={() => setEditIngredient({ kind: 'Closed' })}
            onSave={handleSaveIngredient}
          />
        )}
      </Box>
    </Container>
  );
};

export const CreateCocktail = withAuthenticationRequired(memo(CreateCocktailInner), {
  onRedirecting: Standby,
});
