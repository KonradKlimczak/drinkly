import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserMenu } from './UserMenu';

export const ApplicationBar = () => {
  const user = useSelector((state: RootState) => state.user.user);

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
        {user.isLogged ? (
          <>
            <Button component={RouterLink} to="/createCocktail" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Add new Cocktail
            </Button>
            <UserMenu user={user} />
          </>
        ) : (
          <>
            <Button component={RouterLink} to="/login" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/createAccount"
              variant="contained"
              color="success"
              sx={{ my: 1, mx: 1.5 }}
            >
              Create new account
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
