import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { CocktailStepIcon } from 'components/Icon';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCallback, useState } from 'react';
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
    (newAction: string) => {
      onChange(newAction);
      handleClose();
    },
    [handleClose, onChange]
  );

  return (
    <>
      <IconButton onClick={handleOpen}>
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
            <Button onClick={() => handleChange('garnish')}>
              <CocktailStepIcon icon="garnish" />
            </Button>
            <Button onClick={() => handleChange('pour')}>
              <CocktailStepIcon icon="pour" />
            </Button>
            <Button onClick={() => handleChange('shake')}>
              <CocktailStepIcon icon="shake" />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
