import { CocktailInput, Ingredient } from 'types';

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
