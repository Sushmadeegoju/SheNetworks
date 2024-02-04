import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UserProfileCard from './UserProfileCard/UserProfileCard';
import MentorCard from './MentorCard';
import { Container } from '@mui/material';


const sampleFilters = {
  department: [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Data Science',
    'Marketing',
    'Finance',
    'Human Resources',
    'Sales',
    'Research and Development',
    'Customer Support',
    'IT Operations',
    'Design',
    'Quality Assurance',
  ],
  date: [
    'Today',
    'This Week',
    'This Month',
    'Next Month',
    'Next Quarter',
    'Next Year',
    'Last Week',
    'Last Month',
    'Last Quarter',
    'Last Year',
    'Custom Range',
  ],
};

const handleFilterChange = (type, value) => {
  // Handle filter changes here
  console.log(`Filter changed - Type: ${type}, Value: ${value}`);
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MentorsPage() {
  

  return (
    <Container >
    <Box sx={{ flexGrow: 1 }} >
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
          <div className="filters-container">
              <h2>Filters</h2>
              <div className="filter-section">
                <label>Department:</label>
                <select
                  value={sampleFilters.department || ''}
                  onChange={(e) => handleFilterChange('department', e.target.value)}
                >
                  <option value="">All Departments</option>
                  {sampleFilters.department.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-section">
                <label>Date:</label>
                <select
                  value={sampleFilters.date || ''}
                  onChange={(e) => handleFilterChange('date', e.target.value)}
                >
                  <option value="">All Dates</option>
                  {sampleFilters.date.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default MentorsPage