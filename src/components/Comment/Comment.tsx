import { memo } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const CommentInner = () => {
  const author = 'x';
  const imgLink =
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

  return (
    <Paper sx={{ marginTop: 4 }}>
      <Box sx={{ padding: 2 }}>
        <Box>
          <Avatar alt="Remy Sharp" src={imgLink} />
          {author}
        </Box>
        <p style={{ textAlign: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac
          ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu
          quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus,
          efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris
          vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.{' '}
        </p>
        <p style={{ textAlign: 'left', color: 'gray' }}>posted 1 minute ago</p>
      </Box>
    </Paper>
  );
};

export const Comment = memo(CommentInner);
