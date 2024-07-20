import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Ticket from './components/Ticket.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/tickets" element={<Ticket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
