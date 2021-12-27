import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChangeEvent } from 'react';
import { CocktailInput } from 'types';
import { User } from '@auth0/auth0-spa-js';
import { RecipeStepInputs } from './RecipeStepInputs';

const Input = styled('input')({
  display: 'none',
});

type CocktailFormProps = {
  cocktail: CocktailInput;
  user: User;
  onChangeName: (name: string) => void;
  onChangeAction: (stepIndex: number, action: string) => void;
  onAddIngredient: (stepIndex: number) => void;
  onAddStep: () => void;
};

export const CocktailForm = (props: CocktailFormProps) => {
  const { cocktail, user, onChangeName, onChangeAction, onAddIngredient, onAddStep } = props;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeName(event.target.value);
  };

  return (
    <Box component="form" noValidate onSubmit={console.log} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
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
          <TextField fullWidth disabled value={user.nickname} data-testid="author-input" label="Author" />
        </Grid>
        <Grid item xs={12} md={4} display="flex">
          <Box
            component="label"
            htmlFor="upload-cocktail-picture"
            sx={{
              p: 2,
              border: '1px dashed grey',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <Input accept="image/*" id="upload-cocktail-picture" type="file" />
            <InsertPhotoIcon />
            <Button component="span">Upload picture</Button>
          </Box>
        </Grid>
      </Grid>
      <Typography component="h2" variant="subtitle1" sx={{ marginTop: 1 }}>
        Steps
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 4fr" gap={2} justifyItems="center" alignItems="center">
        <Box>
          <Typography component="h2" variant="body2">
            Action
          </Typography>
        </Box>
        <Box>
          <Typography component="h2" variant="body2">
            Ingredients
          </Typography>
        </Box>
        {cocktail.recipe.map((step, stepIndex) => (
          <RecipeStepInputs
            key={stepIndex}
            stepIndex={stepIndex}
            step={step}
            onChangeAction={onChangeAction}
            onAddIngredient={onAddIngredient}
          />
        ))}
      </Box>
      <Grid container justifyContent="space-between" mt={2}>
        <Grid item>
          <Button onClick={onAddStep}>Add step</Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
