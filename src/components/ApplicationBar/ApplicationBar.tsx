import LocalBarIcon from '@mui/icons-material/LocalBar';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export const ApplicationBar = () => {
  const isAuthenticated = false;

  const handleLogin = useCallback(() => {
    console.log('handleLogin');
  }, []);

  const handleCreateAccount = useCallback(() => {
    console.log('handleCreateAccount');
  }, []);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <LocalBarIcon />
        <Typography component={RouterLink} to="/" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Drinkly
        </Typography>
        {!isAuthenticated && (
          <>
            <Button color="primary" onClick={handleCreateAccount} sx={{ marginRight: 1 }}>
              Create Account
            </Button>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Log in
            </Button>
          </>
        )}
        {isAuthenticated && (
          <>
            <Button component={RouterLink} to="/create-cocktail" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Add new Cocktail
            </Button>
            <UserMenu />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
