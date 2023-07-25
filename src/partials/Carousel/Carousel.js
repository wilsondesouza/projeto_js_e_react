import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../stylization/imgs/carousel-1.jpeg';
import carousel2 from '../../stylization/imgs/carousel-2.jpeg';
import carousel3 from '../../stylization/imgs/carousel-3.jpeg';

export default function Carrosel() {
  return (
    <Carousel fade  className='carrosel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
