import React from 'react';
import { Parallax } from 'react-parallax';
import mentor from '../../src/assets/HomePage_Mentors.jpg';

const ImageThree = () => (
  <Parallax className='image' bgImage={mentor} strength={800}>
    <div className='content'>
      <span className='imageText'> </span>
    </div>
  </Parallax>
);

export default ImageThree;
