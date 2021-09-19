import axios, { AxiosResponse } from 'axios';
import { Cocktail } from 'types';

export function requestGetCocktails(): Promise<AxiosResponse<Cocktail[]>> {
  return axios.request<Cocktail[]>({
    method: 'get',
    url: 'https://my-json-server.typicode.com/KonradKlimczak/demo/cocktails',
  });
}
