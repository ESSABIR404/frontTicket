import React, { useState, useEffect } from 'react';
import logo from '../Home/img/TICKETY2.svg';
import shop from '../Home/img/shop2.png';
import './HeaderTicket.scss';

function HeaderTicket({ activeCategory, setActiveCategory, searchQuery, setSearchQuery , notifications  }) {
  const [isScrolled, setIsScrolled] = useState(false); 
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  

  return (
    <>
      <header className='hedear-d'>
        <div className="header-container">
          <nav className="nav-links">
            <a href='/'>HOME</a>
            <a className='rose'>/</a>
            <a>GET A TICKET</a>
            <a className='rose'>/</a>
            <a>ABOUT US</a>
          </nav>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="shop-icon-containerT">
            <img src={shop} alt="Shop Icon" className="shop-iconT" />
            <img src={shop} alt="Shop Icon" className="shop-icon2T" />
            {
              notifications !== 0 && (
                <div className='notification'>{  notifications}</div>
              )
            }
          </div>
        </div>
      </header>
      <div className={`head-cat ${isScrolled ? 'fixed' : ''}`}>
        <div className='inpt-search'>
          <input 
            type='text' 
            placeholder='Cherchez ce que vous voulez' 
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className='ul-cat'>
          <ul>
            {['All', 'Cinéma', 'Festival Mawazin', 'Festival Gnoua', 'Formations', 'Concerts', 'Nostalgia Lovers Festival'].map((category) => (
              <li
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HeaderTicket;
