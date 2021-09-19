import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const SearchByIngredients = () => {
  return (
    <Autocomplete
      multiple
      disablePortal
      id="search-by-ingredients"
      options={INGREDIENTS}
      fullWidth
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField 
        data-testid="search-by-ingredients" {...params} size="small" label="Search By Ingredients" />
      )}
    />
  );
};

type Ingredient = { label: string };

const INGREDIENTS: Ingredient[] = [
  { label: 'Whiskey Rye' },
  { label: 'Simple Syrup' },
  { label: 'Lemon Juice' },
  { label: 'Egg' },
  { label: 'Angostura Bitters' },
  { label: 'London Dry Gin' },
  { label: '.25 oz. -or- 8 ml. of Simple Syrup' },
  { label: 'Shake & Pour' },
  { label: 'Top with Seltzer' },
  { label: '16 oz. -or- 450 ml. of Ice' },
  { label: '1.5 oz. -or- 45 ml. Creme of Coconut' },
  { label: '1.5 oz. -or- 45 ml. Pineapple Juice' },
  { label: '8 oz. Fresh Pineapple Chunk' },
  { label: '1.5 oz. -or- 45 ml. Rum' },
  { label: "Blend till frappe'd" },
  { label: 'Serve and garnish' },
  { label: 'Melt into a sunset' },
];
