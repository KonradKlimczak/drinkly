import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { PictureInput } from 'components/PictureInput';
import { ChangeEvent } from 'react';
import { CocktailInput } from 'types';
import { RecipeStepInputs } from './RecipeStepInputs';

type CocktailFormProps = {
  cocktail: CocktailInput;
  onChangeName: (name: string) => void;
  onChangeAction: (stepIndex: number, action: string) => void;
  onAddIngredient: (stepIndex: number) => void;
  onAddStep: () => void;
};

export const CocktailForm = (props: CocktailFormProps) => {
  const { cocktail, onChangeName, onChangeAction, onAddIngredient, onAddStep } = props;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(event.target.value);
  };

  return (
    <Box component="form" noValidate onSubmit={console.log} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} display="flex">
          <PictureInput />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            required
            fullWidth
            data-testid="cocktail-name-input"
            label="Cocktail name"
            value={cocktail.name}
            onChange={handleChangeName}
            name="name"
            sx={{ marginBottom: 2 }}
          />
          {cocktail.recipe.map((step, stepIndex) => (
            <RecipeStepInputs
              key={stepIndex}
              stepIndex={stepIndex}
              step={step}
              onChangeAction={onChangeAction}
              onAddIngredient={onAddIngredient}
            />
          ))}
          <Grid item>
            <Button onClick={onAddStep}>Add step</Button>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" sx={{ marginRight: 1 }}>
          Save as Draft
        </Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
};
