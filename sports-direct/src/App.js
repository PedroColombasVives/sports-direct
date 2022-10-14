import './App.css';
import WelcomePage from './WelcomePage/WelcomePage.js'
import SportCard from './SportPage/pages/SportCard';
<<<<<<< HEAD
import NavBarShow from '/Users/pedcolom/Documents/GitHub/sports-direct/sports-direct/src/shared/components/NavBar/NavBarShow.js';

// import MapPage from './MapPage/MapPage.js'

=======
import ItemCard from './ItemPage/pages/ItemCard';
//import MapPage from './MapPage/MapPage.js'
>>>>>>> 8f897a6a68e787ffc5947df0a46e2be437396632
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <NavBarShow />
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/sport" element={<SportCard />} />
          <Route path="/items" element={<ItemCard />} />
        </Routes>
=======
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/sport" element={<SportCard />} />
        <Route path="/items" element={<ItemCard />} />
      </Routes>
>>>>>>> 8f897a6a68e787ffc5947df0a46e2be437396632
    </BrowserRouter>
  );
}

export default App;
