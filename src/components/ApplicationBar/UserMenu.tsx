import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserButton } from 'components/UserButton';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/slices/userSlice';
import { User } from 'types';

type UserMenuProps = {
  user: User;
};

export const UserMenu = (props: UserMenuProps) => {
  const { user } = props;
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

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
