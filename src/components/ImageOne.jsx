import React from 'react';
import { Parallax } from 'react-parallax';
import bg from '../assets/HomePage_Landing.jpg';

const ImageOne = () => (
  <Parallax className='image' bgImage={bg} strength={800}>
    <div className='content'>
      <span className='imageText'> Some Text Here </span>
    </div>
  </Parallax>
);

export default ImageOne;
