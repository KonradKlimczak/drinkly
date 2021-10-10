// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cocktail } from 'types';

// Define a service using a base URL and expected endpoints
export const cocktailDetailsApi = createApi({
  reducerPath: 'cocktailDetails',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getCocktailById: builder.query<Cocktail, string>({
      query: (id) => `cocktail/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCocktailByIdQuery } = cocktailDetailsApi;
