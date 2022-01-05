import { Button, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';
import { IngredientForm } from 'components/IngredientForm';
import { memo, useCallback, useState } from 'react';
import { Ingredient } from 'types';
import { v4 as uuidv4 } from 'uuid';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type IngredientModalInnerProps = {
  initialIngredient?: Ingredient;
  onClose: () => void;
  onSave: (ingredient: Ingredient) => void;
};

const IngredientModalInner = (props: IngredientModalInnerProps) => {
  const { initialIngredient, onClose, onSave } = props;

  const [ingredient, setIngredient] = useState<Ingredient>(() => {
    if (initialIngredient) {
      return initialIngredient;
    }
    return {
      id: uuidv4(),
      name: '',
      amount: '',
    };
  });

  const handleChangeName = useCallback((value: string) => {
    setIngredient((prev) => ({ ...prev, name: value }));
  }, []);

  const handleChangeOptional = useCallback((value: boolean) => {
    setIngredient((prev) => ({ ...prev, optional: value }));
  }, []);

  const handleChangeAmount = useCallback((value: string | number) => {
    setIngredient((prev) => ({ ...prev, amount: value }));
  }, []);

  const handleChangeUnit = useCallback((value: string) => {
    setIngredient((prev) => ({ ...prev, unit: value }));
  }, []);

  const handleSave = useCallback(() => {
    onSave(ingredient);
  }, [ingredient, onSave]);

  return (
    <Modal open onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 1 }}>
          {initialIngredient ? 'Edit ingredient' : 'Add ingredient'}
        </Typography>
        <IngredientForm
          ingredient={ingredient}
          onChangeName={handleChangeName}
          onChangeOptional={handleChangeOptional}
          onChangeAmount={handleChangeAmount}
          onChangeUnit={handleChangeUnit}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', '& .MuiButton-root': { m: 1 } }}>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const IngredientModal = memo(IngredientModalInner);
