import { ChangeEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { CocktailQuery, SortType } from 'types';

import { SearchByIngredients } from './SearchByIngredients';

type CocktailSearchProps = {
  search: CocktailQuery;
  onChange: (query: CocktailQuery) => void;
};

export const CocktailSearch = (props: CocktailSearchProps) => {
  const { search, onChange } = props;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...search, name: event.target.value });
  };

  const handleChangeIngredients = (ingredients: string[]) => {
    onChange({ ...search, ingredients });
  };

  const handleChangeSortType = (event: SelectChangeEvent<SortType>) => {
    onChange({ ...search, sortType: event.target.value as SortType });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          value={search.name}
          onChange={handleChangeName}
          data-testid="cocktail-name-input"
          fullWidth
          autoFocus
          id="search"
          label="Cocktail name"
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <SearchByIngredients value={search.ingredients} onChange={handleChangeIngredients} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl size="small" fullWidth>
          <InputLabel id="sort-cocktails-label">Sort</InputLabel>

          <Select
            value={search.sortType}
            onChange={handleChangeSortType}
            data-testid="sort-cocktails"
            size="small"
            labelId="sort-cocktails-label"
            id="sort-cocktails"
            label="Sort"
          >
            <MenuItem value="MOST_POPULAR">Most Popular</MenuItem>
            <MenuItem value="HIGHEST_RATING">Highest Rating</MenuItem>
            <MenuItem value="LOWEST_RATING">Lowest Rating</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
