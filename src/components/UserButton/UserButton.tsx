import { memo, MouseEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { User } from '@auth0/auth0-spa-js';

import { getInitials, getStringToColor } from 'utils/avatar';

type UserButtonProps = {
  user?: User;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const UserButtonInner = (props: UserButtonProps) => {
  const { user, onClick } = props;

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
      <Avatar
        src={user?.picture}
        sx={{
          bgcolor: getStringToColor(user?.given_name ?? '' + user?.family_name ?? ''),
        }}
      >
        {!user?.picture && user?.given_name && user?.family_name && getInitials(user?.given_name, user?.family_name)}
      </Avatar>
    </Box>
  );
};

export const UserButton = memo(UserButtonInner);
