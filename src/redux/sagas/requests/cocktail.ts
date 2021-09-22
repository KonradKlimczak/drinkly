import axios, { AxiosResponse } from 'axios';
import { Cocktail, CocktailQuery } from 'types';

export function requestGetCocktails(query: CocktailQuery): Promise<AxiosResponse<Cocktail[]>> {
  return axios.request<Cocktail[]>({
    method: 'get',
    url: 'http://localhost:8080/cocktails',
    params: query,
  });
}
