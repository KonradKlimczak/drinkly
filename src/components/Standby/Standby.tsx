import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Standby = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};
