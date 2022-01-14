import axios from 'axios';

export const getIngredients = () => axios.get<string[]>('/ingredients');
