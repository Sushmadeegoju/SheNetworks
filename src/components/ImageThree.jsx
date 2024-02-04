import { Parallax } from 'react-parallax';
import mentor from '../../src/assets/HomePage_Mentors.jpg';
import { Typography } from '@mui/material';

const ImageThree = () => (
  <Parallax className='image' bgImage={mentor} strength={800}>
    <div className='content'>
      <span className='imageText'>
       <div style={{ textAlign: 'center' }}>
      <Typography>
        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit iure architecto ratione sed reiciendis dolores quis esse quo nobis corrupti ullam, quibusdam placeat veritatis excepturi ab. Enim, rem aliquid? */}
      </Typography>
    </div>
      </span>
    </div>
  </Parallax>
);

export default ImageThree;
