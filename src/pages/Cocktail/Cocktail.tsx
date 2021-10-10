import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { useParams } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import { useGetCocktailByIdQuery } from 'services/cocktail';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import { CocktailStepIcon } from 'components/Icon';

export const Cocktail = () => {
  const { cocktailId } = useParams<{ cocktailId: string }>();

  const [multiplier, setMultiplier] = useState(1);

  const handleMinus = useCallback(() => {
    setMultiplier((prev) => prev - 1 || 1);
  }, []);
  const handlePlus = useCallback(() => {
    setMultiplier((prev) => prev + 1);
  }, []);

  const data = useGetCocktailByIdQuery(cocktailId);
  const cocktail = data.data;

  return (
    <Container component="main" maxWidth="lg">
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${data.data?.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={7} sx={{ padding: 1 }}>
          <Typography component="h2" variant="h5">
            {cocktail?.name}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div>
              {cocktail?.recipe.map((step, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <CocktailStepIcon icon={step.action} />
                  <div style={{ display: 'flex' }}>
                    {step.ingredients.map((ingredient) => (
                      <div key={ingredient.name} style={{ padding: 8 }}>
                        <Typography variant="body2" component="div" display="flex" justifyContent="center">
                          {typeof ingredient.amount === 'number' ? ingredient.amount * multiplier : ingredient.amount}{' '}
                          {ingredient.unit}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                          {ingredient.name}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Paper elevation={1} sx={{ marginLeft: 3, padding: 2, display: 'inline-flex', alignItems: 'center' }}>
              <Badge badgeContent={multiplier} color="primary" sx={{ marginRight: 3 }}>
                <LocalBarIcon color="action" />
              </Badge>
              <ButtonGroup disableElevation variant="contained">
                <Button onClick={handleMinus}>
                  <RemoveIcon />
                </Button>
                <Button onClick={handlePlus}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
