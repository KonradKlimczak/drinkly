import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { useParams } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';

export const Cocktail = () => {
  const { cocktailId } = useParams<{ cocktailId: string }>();

  return (
    <Container component="main" maxWidth="lg">
      <div>
        <Paper elevation={1} sx={{ padding: 2, display: 'inline-flex', alignItems: 'center' }}>
          <Badge badgeContent={4} color="primary" sx={{ marginRight: 3 }}>
            <LocalBarIcon color="action" />
          </Badge>
          <ButtonGroup disableElevation variant="contained">
            <Button>
              <RemoveIcon />
            </Button>
            <Button>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Paper>
      </div>
    </Container>
  );
};
