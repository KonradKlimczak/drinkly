import { MouseEvent, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { User } from 'types';
import { getInitials, getStringToColor } from 'utils/avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { logout } from 'redux/slices/userSlice';
import { useDispatch } from 'react-redux';

type UserButtonProps = {
  user: User;
};

export const UserButton = (props: UserButtonProps) => {
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
      <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
        <Avatar
          sx={{
            bgcolor: getStringToColor(user.firstName + user.lastName),
          }}
        >
          {getInitials(user.firstName, user.lastName)}
        </Avatar>
      </Box>
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
