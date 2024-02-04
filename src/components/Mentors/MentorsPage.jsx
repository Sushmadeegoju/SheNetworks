import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserProfileCard from './UserProfileCard/UserProfileCard';
import MentorCard from './MentorCard';
import { Container } from '@mui/material';
import MentorFilter from './MentorFilter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MentorsPage() {
  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item>
          <Item><UserProfileCard /></Item>
        </Grid>
        <Grid item>
          <Item>
            <MentorCard/>
          </Item>

        </Grid>
        <Grid item>
          <Item>
            {/* <Filter/> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default MentorsPage