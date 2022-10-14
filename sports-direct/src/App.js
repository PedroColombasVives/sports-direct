import './App.css';
import WelcomePage from './WelcomePage/WelcomePage.js'
import SportCard from './SportPage/pages/SportCard';
import NavBarShow from '/Users/pedcolom/Documents/GitHub/sports-direct/sports-direct/src/shared/components/NavBar/NavBarShow.js';

// import MapPage from './MapPage/MapPage.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBarShow />
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/sport" element={<SportCard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
