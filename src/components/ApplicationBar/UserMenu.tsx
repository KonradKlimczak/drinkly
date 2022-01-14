import { MouseEvent, useState } from 'react';
import { useQuery } from 'react-query';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { getUser } from 'api/user';
import { UserButton } from 'components/UserButton';

export const UserMenu = () => {
  const { data: user } = useQuery('user', getUser);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => console.log;

  if (!user) {
    return null;
  }

  return (
    <>
      <UserButton user={user.data} onClick={handleClick} />
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
