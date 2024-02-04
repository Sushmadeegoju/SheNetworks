
import { Parallax } from 'react-parallax';
import bg from '../assets/HomePage_Landing.jpeg';


const ImageOne = ({text}) => (
  <Parallax className='image' bgImage={bg} strength={800}>
    <div className='content'>
      <div style={{backgroundColor: "whitesmoke", marginLeft: "500px", marginTop: "40vh", fontWeight: "800", fontFamily: "sans-serif", textAlign:"center", fontSize: "28px"}}> 
          {text}
      </div>
    </div>
  </Parallax>
);

export default ImageOne;
