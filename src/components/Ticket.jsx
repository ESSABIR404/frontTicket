import React, { useState } from 'react';
import HeaderTicket from './Ticket/HeaderTicket.jsx';
import Slider from './Ticket/Slider.jsx';
import ListeEvent from './Ticket/ListeEvent.jsx';

function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(0);
  const incrementNotifications = () => {
    setNotifications(prev => prev + 1); // Incrémenter les notifications
  };

  return (
    <div>
      <HeaderTicket 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        notifications={notifications}
      />
      {searchQuery === '' && <Slider />}
      <ListeEvent activeCategory={activeCategory} searchQuery={searchQuery} incrementNotifications={incrementNotifications} />
    </div>
  );
}

export default Home;
