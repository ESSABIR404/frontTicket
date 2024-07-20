import React, { useState, useEffect } from 'react';
import './Slider.scss';
import i1 from './img/1.jpeg';
import i2 from './img/2.jpeg';
import i3 from './img/3.jpeg';

const images = [i1, i2, i3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const ticketTexts = [
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET',
    'GET A TICKET'
  ];

  return (
    <div className='slider'>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='slide-image' />
      <div className='navigation'>
        <button className='prev' onClick={prevSlide}>&lt;</button>
        <button className='next' onClick={nextSlide}>&gt;</button>
      </div>
      <div className='t-Psection'>
      <div className='scrolling-content'>
        {ticketTexts.map((text, index) => (
          <p key={index} className={index % 2 === 0 ? 'rose' : ''}>{text}</p>
        ))}
        {ticketTexts.map((text, index) => (
          <p key={index + ticketTexts.length} className={index % 2 === 0 ? 'rose' : ''}>{text}</p>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;
