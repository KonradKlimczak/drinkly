import axios from 'axios';

import { Cocktail } from 'types';

export const getCocktails = () => axios.get<Cocktail[]>('/cocktails');
