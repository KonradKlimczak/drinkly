import { Box, ButtonGroup, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Ingredient } from 'types';

type IngredientProps = {
  ingredient: Ingredient;
  onEdit?: (ingredient: Ingredient) => void;
  onRemove?: (ingredient: Ingredient) => void;
};

export const IngredientBox = (props: IngredientProps) => {
  const { ingredient, onEdit, onRemove } = props;

  const [showButtons, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(ingredient);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(ingredient);
    }
  };

  return (
    <Box
      sx={{ padding: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(onEdit || onRemove) && (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{
            position: 'absolute',
            bottom: -40,
            visibility: showButtons ? 'visible' : 'hidden',
            zIndex: 1,
            backgroundColor: 'white',
          }}
        >
          {onEdit && (
            <IconButton aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          )}
          {onRemove && (
            <IconButton aria-label="delete" onClick={handleRemove}>
              <DeleteIcon />
            </IconButton>
          )}
        </ButtonGroup>
      )}
      <Typography variant="subtitle2" component="div">
        {ingredient.name || '<ingredient>'}
      </Typography>
      <Typography variant="body2" component="div" display="flex" sx={{ fontSize: '1.25rem' }}>
        {ingredient.amount} {ingredient.unit}
      </Typography>
    </Box>
  );
};
