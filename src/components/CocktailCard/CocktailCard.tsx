import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import { Link as RouterLink } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { CocktailStepIcon } from 'components/Icon';
import { CardActions, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import { IngredientBox } from 'components/Ingredient';
import { Cocktail } from 'types';

type CocktailCardProps = {
  cocktail: Cocktail;
};

export const CocktailCard = (props: CocktailCardProps) => {
  const { cocktail } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite((prev) => !prev);
  };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <CardActionArea component={RouterLink} to={`/cocktail/${cocktail.id}`} sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 320, display: { xs: 'none', sm: 'block' } }}
          image={cocktail.image}
          alt={cocktail.name}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5" sx={{ fontSize: '1.75rem', fontWeight: 500 }}>
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
              <div style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CocktailStepIcon icon={step.action} />
              </div>
              {step.ingredients && (
                <div style={{ display: 'flex' }}>
                  {step.ingredients.map((ingredient) => (
                    <IngredientBox key={ingredient.id} ingredient={ingredient} />
                  ))}
                </div>
              )}
              {step.endAction && (
                <div style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CocktailStepIcon icon={step.endAction} />
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="favorite" color="primary" onClick={handleClickFavorite}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
