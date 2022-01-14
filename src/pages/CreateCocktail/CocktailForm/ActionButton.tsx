import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { CocktailStepIcon } from 'components/Icon';
import ButtonGroup from '@mui/material/ButtonGroup';
import { MouseEvent, useCallback, useState } from 'react';
import Button from '@mui/material/Button';

type ActionButtonProps = {
  action: string;
  onChange: (action: string) => void;
};

export const ActionButton = (props: ActionButtonProps) => {
  const { action, onChange } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (event.currentTarget.dataset.value) {
        onChange(event.currentTarget.dataset.value);
        handleClose();
      }
    },
    [handleClose, onChange]
  );

  return (
    <>
      <IconButton onClick={handleOpen} color="primary">
        <div style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CocktailStepIcon icon={action} />
        </div>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Selet action
          </Typography>
          <ButtonGroup variant="outlined">
            <Button data-value="garnish" onClick={handleChange}>
              <CocktailStepIcon icon="garnish" />
            </Button>
            <Button data-value="shake" onClick={handleChange}>
              <CocktailStepIcon icon="shake" />
            </Button>
            <Button data-value="shaker-add" onClick={handleChange}>
              <CocktailStepIcon icon="shaker-add" />
            </Button>
            <Button data-value="old-fashioned-garnish" onClick={handleChange}>
              <CocktailStepIcon icon="old-fashioned-garnish" />
            </Button>
            <Button data-value="long-garnish" onClick={handleChange}>
              <CocktailStepIcon icon="long-garnish" />
            </Button>
            <Button data-value="shaker-pour" onClick={handleChange}>
              <CocktailStepIcon icon="shaker-pour" />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
