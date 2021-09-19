import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CocktailCard } from 'components/CocktailCard';
import Grid from '@mui/material/Grid';
import { SearchByIngredients } from './SearchByIngredients';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktails } from 'redux/sagas/actions/cocktail';
import { useEffect } from 'react';
import { RootState } from 'redux/store';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);
  const cocktails = useSelector((state: RootState) => state.cocktail.cocktails);

  return (
    <Box sx={{ padding: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            data-testid="cocktail-name-input"
            fullWidth
            autoFocus
            id="search"
            label="Cocktail name"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <SearchByIngredients />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl size="small" fullWidth>
            <InputLabel id="sort-cocktails-label">Sort</InputLabel>
            <Select
              data-testid="sort-cocktails"
              size="small"
              labelId="sort-cocktails-label"
              id="sort-cocktails"
              label="Sort"
              value=""
            >
              <MenuItem value={30}>Most Popular</MenuItem>
              <MenuItem value={10}>Highest Rating</MenuItem>
              <MenuItem value={20}>Lowest Rating</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {typeof cocktails === 'undefined' && (
        <Stack
          sx={{ color: 'grey.500' }}
          spacing={2}
          direction="row"
          justifyContent="center"
          mt={3}
        >
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
    </Box>
  );
};
