import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Dsection.scss';
import img1 from './img/list-home-1.png';
import img2 from './img/list-home-2.png';
import img3 from './img/list-home-3.png';
import img4 from './img/list-home-4.jpeg';
import img5 from './img/list-home-1.png';
import img6 from './img/list-home-2.png';
import img7 from './img/list-home-3.png';
import img8 from './img/list-home-4.jpeg';

function Psection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='Dsection'>
      <h1>THE NEW</h1>
      <Slider {...settings} className='slider-home'>
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
          <div className='card-slider-home' key={index}>
            <img src={img} alt={`Image ${index + 1}`} />
            <button className="buy-button">BUY NEW</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Psection;
