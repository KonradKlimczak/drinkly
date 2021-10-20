import { useCallback } from 'react';

import AddIcon from '@mui/icons-material/Add';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';

type Callback = (counter: number) => number;

type DrinkCounterProps = {
  counter: number;
  onChange: (callback: Callback) => void;
};

export const DrinkCounter = (props: DrinkCounterProps) => {
  const { counter, onChange } = props;

  const handleMinus = useCallback(() => {
    onChange((prev) => prev - 1 || 1);
  }, [onChange]);
  const handlePlus = useCallback(() => {
    onChange((prev) => prev + 1);
  }, [onChange]);

  return (
    <Paper elevation={1} sx={{ padding: 2, display: 'inline-flex', alignItems: 'center' }}>
      <Badge badgeContent={counter} color="primary" sx={{ marginRight: 3 }}>
        <LocalBarIcon color="action" />
      </Badge>
      <ButtonGroup disableElevation variant="contained">
        <Button onClick={handleMinus}>
          <RemoveIcon />
        </Button>
        <Button onClick={handlePlus}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
