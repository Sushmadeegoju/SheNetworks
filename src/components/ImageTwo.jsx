import React from 'react';
import { Parallax } from 'react-parallax';
import event from '../../src/assets/HomePage_Events.jpg';

const ImageTwo = () => (
  <Parallax className='image' bgImage={event} strength={800}>
    <div className='content'>
      <span className='imageText'> </span>
    </div>
  </Parallax>
);

export default ImageTwo;
