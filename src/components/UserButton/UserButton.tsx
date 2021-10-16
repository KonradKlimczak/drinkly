import { memo, MouseEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

import { User } from 'types';
import { getInitials, getStringToColor } from 'utils/avatar';

type UserButtonProps = {
  user: User;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const UserButtonInner = (props: UserButtonProps) => {
  const { user, onClick } = props;

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
      <Avatar
        sx={{
          bgcolor: getStringToColor(user.username + user.lastName),
        }}
      >
        {getInitials(user.username, user.lastName)}
      </Avatar>
    </Box>
  );
};

export const UserButton = memo(UserButtonInner);
