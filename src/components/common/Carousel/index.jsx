import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../../assets/1.jpg';
import banner2 from '../../../assets/2.jpg';
import banner3 from '../../../assets/3.jpg';
import banner4 from '../../../assets/4.jpg';
import banner5 from '../../../assets/5.jpg';

const CarouselBanner = () => {
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5
  ];

  return (
    <Carousel showArrows={true} autoPlay infiniteLoop={true} showThumbs={false} interval={9000}>
      {
        banners.map((banner, index) => (
          <div key={index}>
            <img src={ banner } alt={`banner-${index}`} />
          </div>
        ))
      } 
    </Carousel>
  )
}

export default CarouselBanner;