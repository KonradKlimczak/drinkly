import { memo, MouseEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

import { getInitials, getStringToColor } from 'utils/avatar';
import { User } from 'types';

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
