import React from 'react';
import './Psection.scss'
import parnership from './img/Partnership.svg';
import imgh from './img/img-home.jpg';

function Psection() {

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
    <div className='Psection'>
        <div className='g-Psection'>
            <div className='p-Psection'>
                <h1>
                GET READY TO 
                EXPERINCE THE
                BEST EVENTS
                </h1>
                <div className='imgBut-Psection'>
                    <img src={parnership}/>
                    <button>GET TICKET</button>
                </div>
                
            </div>
            <div className='d-Psection'>
                <div className='card-home'>
                    <div className='card-home-span'>
                        <span>FESTIVAL MAWAZIN</span>
                    </div>
                   
                    <h2>
                        THE SUMMER
                        FORMAL CONCER
                    </h2>
                    <p>31.06.2024</p>
                    <img src={imgh}/>
                </div>
            </div>
            
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

export default Psection;