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
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { getCocktails } from 'api/cocktail';
import { getIngredients } from 'api/ingredient';

export const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.cocktail.query);

  const { data: cocktailsQuery } = useQuery('cocktails', getCocktails);

  const { data: ingredientsQuery } = useQuery('ingredients', getIngredients);

  const cocktails = useMemo(() => cocktailsQuery?.data, [cocktailsQuery?.data]);
  const ingredients = useMemo(() => ingredientsQuery?.data, [ingredientsQuery?.data]);

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
