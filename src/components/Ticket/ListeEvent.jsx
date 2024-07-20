import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ListeEvent.scss';
import logo from '../Home/img/TICKETY.svg';

// Exemple d'importation d'images
import img1 from './event/e1.png';
import img2 from './event/e2.jpeg';
import img3 from './event/e3.png';
import img4 from './event/e4.jpeg';
import img5 from './event/e5.png';
import img6 from './event/e6.jpeg';
import img7 from './event/e7.jpeg';
import img8 from './event/e8.jpeg';
import img9 from './event/e9.jpeg';
import img10 from './event/e10.jpeg';
import img11 from './event/e11.jpeg';
import img12 from './event/e12.png';

const events = [
    { img: img1, title: 'Concert Rock', price: '200 DH', category: 'Concerts', location: 'Casablanca', date: '2024-08-01' },
    { img: img2, title: 'Art Exhibition', price: '150 DH', category: 'Formations', location: 'Rabat', date: '2024-08-15' },
    { img: img3, title: 'Tech Conference', price: '500 DH', category: 'Cinéma', location: 'Marrakech', date: '2024-09-05' },
    { img: img4, title: 'Food Festival', price: '100 DH', category: 'Festival Mawazin', location: 'Fès', date: '2024-09-20' },
    { img: img5, title: 'Jazz Night', price: '180 DH', category: 'Cinéma', location: 'Tangier', date: '2024-10-10' },
    { img: img6, title: 'Photography Workshop', price: '120 DH', category: 'Nostalgia Lovers Festival', location: 'Agadir', date: '2024-10-15' },
    { img: img7, title: 'Theatre Play', price: '160 DH', category: 'Nostalgia Lovers Festival', location: 'Oujda', date: '2024-11-01' },
    { img: img8, title: 'Cultural Festival', price: '130 DH', category: 'Festival Mawazin', location: 'Kenitra', date: '2024-11-10' },
    { img: img9, title: 'Dance Performance', price: '200 DH', category: 'Cinéma', location: 'El Jadida', date: '2024-12-05' },
    { img: img10, title: 'Music Workshop', price: '150 DH', category: 'Concerts', location: 'Meknes', date: '2024-12-15' },
    { img: img11, title: 'Film Screening', price: '90 DH', category: 'Cinéma', location: 'Sale', date: '2025-01-10' },
    { img: img12, title: 'Cooking Class', price: '140 DH', category: 'Cinéma', location: 'Tétouan', date: '2025-01-20' },
  ];

function ListeEvent({ activeCategory, searchQuery,incrementNotifications  }) {
   
  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    gsap.fromTo('.footer', 
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 90%',
          end: 'top 50%',
          scrub: true,
          toggleActions: 'play none none reverse',
          markers: false
        }
      }
    );
  }, []);
  const handleBuyClick = () => {
    incrementNotifications(); // Incrémenter les notifications
  };

  return (
    <>
      <div className='liste-event'>
        {filteredEvents.map((event, index) => (
          <div key={index} className='event-item'>
            <img src={event.img} alt={`Event ${index + 1}`} className='event-image' />
            <div className='event-overlay'>
              <button onClick={handleBuyClick} className='buy-button'>J'achète</button>
              <span>A Partie de :</span><p className='event-price'>{event.price}</p>
              <h3 className='event-title'>{event.title}</h3>
              <button className='event-category'>{event.category}</button>
              <p className='event-location'>{event.location}</p>
              <p className='event-date'>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Tickety Logo" />
          </div>
          <div className="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Adresse: 123 Rue Exemplar, Paris, France</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
            <p>Email: contact@tickety.com</p>
          </div>
          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et offres.</p>
            <form>
              <input type="email" placeholder="Votre email" />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
          <div className="footer-social">
            <h3>Suivez-nous</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Tickety. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

export default ListeEvent;
