import { useAuth0 } from '@auth0/auth0-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserButton } from 'components/UserButton';
import { MouseEvent, useState } from 'react';

export const UserMenu = () => {
  const { user, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      <UserButton user={user} onClick={handleClick} />
      <ArrowDropDownIcon fontSize="small" />
      <Menu id="user-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Your profile</MenuItem>
        <MenuItem onClick={handleClose}>Your cocktails</MenuItem>
        <MenuItem onClick={handleClose}>Your reviews</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </>
  );
};
