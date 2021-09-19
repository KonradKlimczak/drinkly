import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type SearchByIngredientsProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export const SearchByIngredients = (props: SearchByIngredientsProps) => {
  const { value, onChange } = props;

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      id="search-by-ingredients"
      options={INGREDIENTS}
      fullWidth
      value={value}
      onChange={(event: any, newValue: string[]) => {
        onChange(newValue);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField data-testid="search-by-ingredients" {...params} size="small" label="Search By Ingredients" />
      )}
    />
  );
};

const INGREDIENTS: string[] = [
  'Whiskey Rye',
  'Simple Syrup',
  'Lemon Juice',
  'Egg',
  'Angostura Bitters',
  'Gin',
  'Creme of Coconut',
  'Pineapple Juice',
  'Pineapple Chunk',
  'Rum',
];
