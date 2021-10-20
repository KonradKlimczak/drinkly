import { useState } from 'react';
import { useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Comment } from 'components/Comment';
import { CocktailStepIcon } from 'components/Icon';
import { useGetCocktailByIdQuery } from 'services/cocktail';
import { DrinkCounter } from 'components/DrinkCounter';
import Box from '@mui/system/Box';
import Rating from '@mui/material/Rating';

export const Cocktail = () => {
  const { cocktailId } = useParams<{ cocktailId: string }>();

  const [multiplier, setMultiplier] = useState(1);

  const data = useGetCocktailByIdQuery(cocktailId);
  const cocktail = data.data;

  return (
    <Container component="main" maxWidth="xl">
      <Grid container component="main">
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            height: 600,
            backgroundImage: `url(${data.data?.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={7} sx={{ padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography component="h2" variant="h5">
                {cocktail?.name}
              </Typography>
              <Typography variant="subtitle2">
                by{' '}
                <Link component={RouterLink} to={`/user/${cocktail?.author.username}`}>
                  {cocktail?.author.username}
                </Link>
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <Rating
                  data-testid="cocktail-rating"
                  precision={0.1}
                  name={`${cocktail?.id}-rating`}
                  value={cocktail?.rating}
                  readOnly
                  sx={{ marginRight: 0.5 }}
                />
                {cocktail?.rating}
              </Typography>
            </Box>
            <DrinkCounter counter={multiplier} onChange={setMultiplier} />
          </Box>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 10 }}>
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
          </div>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Typography component="h3" variant="h6">
            Comments
          </Typography>
          <Comment />
          <Comment />
        </Grid>
      </Grid>
    </Container>
  );
};
