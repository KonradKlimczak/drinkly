import { v4 as uuidv4 } from 'uuid';

import { CocktailInput, Ingredient, RecipeStep } from 'types';

export const addIngredient = (cocktail: CocktailInput, ingredient: Ingredient, stepIndex: number): CocktailInput => {
  return {
    ...cocktail,
    recipe: cocktail.recipe.map((step, index) => {
      if (index === stepIndex) {
        return {
          ...step,
          ingredients: [...step.ingredients, ingredient],
        };
      }
      return step;
    }),
  };
};

export const getRecipeStep = (): RecipeStep => ({ id: uuidv4(), action: 'shake', ingredients: [] });
