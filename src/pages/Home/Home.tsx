import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { CocktailCard } from 'components/CocktailCard';
import { setQuery } from 'redux/slices/cocktailSlice';
import { RootState } from 'redux/store';
import { CocktailQuery } from 'types';
import { CocktailSearch } from './CocktailSearch';
import { Direction, SortField, useGetCocktailsQuery, useGetIngredientsQuery } from 'generated/graphql';
import { Box } from '@mui/material';

export const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.cocktail.query);

  const { data: cocktailsQuery } = useGetCocktailsQuery({
    variables: { ...query, skip: 0, take: 10, sortBy: { field: SortField.Name, direction: Direction.Asc } },
  });

  const { data: ingredientsQuery } = useGetIngredientsQuery({});

  const cocktails = useMemo(() => cocktailsQuery?.cocktails, [cocktailsQuery?.cocktails]);
  const ingredients = useMemo(() => ingredientsQuery?.ingredients, [ingredientsQuery?.ingredients]);

  const handleChangeSearch = useCallback(
    (query: CocktailQuery) => {
      dispatch(setQuery(query));
    },
    [dispatch]
  );

  return (
    <Container maxWidth="xl" component="main" sx={{ marginTop: 1 }}>
      <CocktailSearch search={query} ingredients={ingredients ?? []} onChange={handleChangeSearch} />

      {typeof cocktails === 'undefined' && (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" justifyContent="center" mt={3}>
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      )}
      <Box flexDirection="column" sx={{ '& .MuiCard-root': { mt: 2 } }}>
        {cocktails?.map((cocktail) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </Box>
    </Container>
  );
};
