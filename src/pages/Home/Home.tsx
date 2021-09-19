import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CocktailCard } from 'components/CocktailCard';
import Grid from '@mui/material/Grid';
import { COCKTAILS_MOCK } from './constants';
import { SearchByIngredients } from './SearchByIngredients';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Home = () => {
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

      <Grid container spacing={4} sx={{ marginTop: 0 }} flexDirection="column">
        {COCKTAILS_MOCK.map((cocktail) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </Grid>
    </Box>
  );
};
