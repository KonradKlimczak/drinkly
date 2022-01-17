import { useCallback, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { IngredientBox } from 'components/Ingredient';

import { Ingredient, RecipeStep } from 'types';

import { IngredientModal } from './IngredientModal';
import { ActionButton } from './ActionButton';

type IngredientModal =
  | {
      kind: 'Closed';
    }
  | {
      kind: 'Add';
    }
  | {
      kind: 'Edit';
      ingredient: Ingredient;
    };

type RecipeStepInputsProps = {
  step: RecipeStep;
  onChange: (step: RecipeStep) => void;
};

export const RecipeStepInputs = (props: RecipeStepInputsProps) => {
  const { step, onChange } = props;

  const [editIngredient, setEditIngredient] = useState<IngredientModal>({ kind: 'Closed' });

  const handleAddIngredient = useCallback(() => {
    setEditIngredient({ kind: 'Add' });
  }, []);

  const handleEditIngredient = useCallback((ingredient: Ingredient) => {
    setEditIngredient({ kind: 'Edit', ingredient });
  }, []);

  const onRemoveIngredient = useCallback(
    (ingredient: Ingredient) => {
      onChange({ ...step, ingredients: step.ingredients.filter((i) => i.id !== ingredient.id) });
    },
    [onChange, step]
  );

  const handleSaveIngredient = useCallback(
    (ingredient: Ingredient) => {
      if (editIngredient.kind === 'Add') {
        onChange({ ...step, ingredients: [...step.ingredients, ingredient] });
      }
      if (editIngredient.kind === 'Edit') {
        onChange({ ...step, ingredients: step.ingredients.map((i) => (i.id === ingredient.id ? ingredient : i)) });
      }
      setEditIngredient({ kind: 'Closed' });
    },
    [step, editIngredient, onChange]
  );

  const handleChangeAction = useCallback(
    (action: string) => {
      onChange({
        ...step,
        action,
      });
    },
    [onChange, step]
  );

  const handleChangeEndAction = useCallback(
    (endAction: string) => {
      onChange({
        ...step,
        endAction,
      });
    },
    [onChange, step]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ActionButton action={step.action} onChange={handleChangeAction} />
      <Box
        sx={{
          justifySelf: 'start',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {step.ingredients.map((ingredient, index) => (
          <IngredientBox
            key={index}
            ingredient={ingredient}
            onEdit={handleEditIngredient}
            onRemove={onRemoveIngredient}
          />
        ))}
        <IconButton color="primary" sx={{ marginLeft: 1 }} onClick={handleAddIngredient}>
          <AddIcon />
        </IconButton>
        {editIngredient.kind !== 'Closed' && (
          <IngredientModal
            initialIngredient={editIngredient.kind === 'Edit' ? editIngredient.ingredient : undefined}
            onClose={() => setEditIngredient({ kind: 'Closed' })}
            onSave={handleSaveIngredient}
          />
        )}
      </Box>
      <ActionButton action={step.endAction} onChange={handleChangeEndAction} />
    </Box>
  );
};
