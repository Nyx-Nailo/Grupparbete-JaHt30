import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Menu } from './Components/Menu.js';
import BookTravel from './Pages/BookTravel.js';
import BookPickup from './Pages/BookPickup.js';
import Layout from './Pages/Layout.js';
import ListBookPickup from "./Pages/ListBookPickup"
import ListBookTravel from "./Pages/ListBookTravel"

function App() {
  return (
    <div id='App'>
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<div>Välkommen</div>} />
            <Route path='/1' element={<BookTravel />} />
            <Route path='/2' element={<BookPickup />} />
            <Route path='/3' element={<ListBookTravel/>} />
            <Route path='/4' element={<ListBookPickup/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
