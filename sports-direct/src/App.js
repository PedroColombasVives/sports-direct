import './App.css';
import WelcomePage from './WelcomePage/WelcomePage.js'
import SportCard from './SportPage/pages/SportCard';
import ItemCard from './ItemPage/pages/ItemCard';
//import MapPage from './MapPage/MapPage.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/sport" element={<SportCard />} />
        <Route path="/items" element={<ItemCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
