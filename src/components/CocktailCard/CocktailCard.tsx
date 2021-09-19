import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { Cocktail } from 'types';

type CocktailCardProps = {
  cocktail: Cocktail;
};

export const CocktailCard = (props: CocktailCardProps) => {
  const { cocktail } = props;

  return (
    <Grid item flex={1}>
      <CardActionArea component="a" href="#">
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
            <Typography variant="subtitle1" paragraph>
              {cocktail.ingredients.join(', ')}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
