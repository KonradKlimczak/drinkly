import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Link as RouterLink } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { Cocktail } from 'types';
import { CocktailStepIcon } from 'components/Icon';

type CocktailCardProps = {
  cocktail: Cocktail;
};

export const CocktailCard = (props: CocktailCardProps) => {
  const { cocktail } = props;

  return (
    <Grid item flex={1} >
      <CardActionArea component={RouterLink} to={`/cocktail/${cocktail.id}`}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={cocktail.image}
            alt={cocktail.name}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {cocktail.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <Rating
                data-testid="cocktail-rating"
                precision={0.1}
                name={`${cocktail.id}-rating`}
                value={cocktail.rating}
                readOnly
              />
            </Typography>
            {cocktail.recipe.map((step, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <CocktailStepIcon icon={step.action} />
                <div style={{ display: 'flex' }}>
                  {step.ingredients.map((ingredient) => (
                    <div key={ingredient.name} style={{ padding: 8 }}>
                      <Typography variant="body2" component="div" display="flex" justifyContent="center">
                        {ingredient.amount} {ingredient.unit}
                      </Typography>
                      <Typography variant="subtitle2" component="div">
                        {ingredient.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
