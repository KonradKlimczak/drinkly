import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { PictureInput } from 'components/PictureInput';
import { ChangeEvent } from 'react';
import { CocktailInput, RecipeStep } from 'types';
import { RecipeStepInputs } from './RecipeStepInputs';

type CocktailFormProps = {
  cocktail: CocktailInput;
  onChangeName: (name: string) => void;
  onChangeStep: (step: RecipeStep) => void;
  onAddStep: () => void;
  onChangeImage: (image?: string) => void;
};

export const CocktailForm = (props: CocktailFormProps) => {
  const { cocktail, onChangeName, onChangeStep, onAddStep, onChangeImage } = props;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(event.target.value);
  };

  return (
    <Box component="form" noValidate onSubmit={console.log} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} display="flex">
          <PictureInput image={cocktail.image} onChange={onChangeImage} />
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
          {cocktail.recipe.map((step) => (
            <RecipeStepInputs key={step.id} step={step} onChange={onChangeStep} />
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
