import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { Cocktail } from 'types';

type CreateCocktailProps = {
  cocktail: Cocktail;
};

export const CreateCocktail = (props: CreateCocktailProps) => {
  const { cocktail } = props;

  return <Grid item flex={1}>N\A</Grid>;
};
