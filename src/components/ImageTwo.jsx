import { Parallax } from 'react-parallax';
import eventImage from '../../src/assets/HomePage_Events.jpg';
import { Typography, Card, CardContent } from '@mui/material';
import '../css/Homepage.css'

const ImageTwo = () => (
  <Parallax className='image' bgImage={eventImage} strength={800}>
    <div className='content'>
      <div className='cards-container'>
        {/* Events Card */}
        <Card className='card'>
          <CardContent>
            <Typography variant='h5' gutterBottom>
              Events
            </Typography>
            <Typography variant='body2'>
              Explore upcoming events and stay informed about exciting activities in your field.
            </Typography>
          </CardContent>
        </Card>

        {/* Mentors Card */}
        <Card className='card'>
          <CardContent>
            <Typography variant='h5' gutterBottom>
              Mentors
            </Typography>
            <Typography variant='body2'>
              Connect with experienced mentors who can guide you in your career journey.
            </Typography>
          </CardContent>
        </Card>

        {/* Discussions Card */}
        <Card className='card'>
          <CardContent >
            <Typography variant='h5' gutterBottom>
              Discussions
            </Typography>
            <Typography variant='body2'>
              Engage in meaningful discussions with the community and share your insights.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  </Parallax>
);

export default ImageTwo;
