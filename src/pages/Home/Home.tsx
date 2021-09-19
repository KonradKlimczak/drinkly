import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { CocktailCard } from 'components/CocktailCard';
import { getCocktails } from 'redux/sagas/actions/cocktail';
import { setQuery } from 'redux/slices/cocktailSlice';
import { RootState } from 'redux/store';
import { CocktailQuery } from 'types';
import { CocktailSearch } from './CocktailSearch';

export const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.cocktail.query);
  const cocktails = useSelector((state: RootState) => state.cocktail.cocktails);

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  const handleChangeSearch = useCallback(
    (query: CocktailQuery) => {
      dispatch(setQuery(query));
    },
    [dispatch]
  );

  return (
    <Container maxWidth="xl" component="main" sx={{ marginTop: 1 }}>
      <CocktailSearch search={query} onChange={handleChangeSearch} />

      {typeof cocktails === 'undefined' && (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" justifyContent="center" mt={3}>
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      )}
      <Grid container spacing={4} sx={{ marginTop: 0 }} flexDirection="column">
        {cocktails?.map((cocktail) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </Grid>
    </Container>
  );
};
