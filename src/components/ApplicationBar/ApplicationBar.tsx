import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';

export const ApplicationBar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <LocalBarIcon />
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Drinkly
        </Typography>
        <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
        <Button
          href="#"
          variant="contained"
          color="success"
          sx={{ my: 1, mx: 1.5 }}
        >
          Create new account
        </Button>
      </Toolbar>
    </AppBar>
  );
};
