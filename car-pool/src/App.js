import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Menu } from './Components/Menu.js';

import Layout from './Pages/Layout.js';

import Main from './Pages/StartPage';
import BookTravel from './Pages/BookTravel.js';
import BookPickup from './Pages/BookPickup.js';
import ListBookPickup from './Pages/ListBookPickup';
import ListBookTravel from './Pages/ListBookTravel';
import OmOss from './Pages/OmOss';

function App() {
  return (
    <div id='App'>
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/boka-resa' element={<BookTravel />} />
            <Route path='/boka-upphamtning' element={<BookPickup />} />
            <Route path='/lista-resor' element={<ListBookTravel />} />
            <Route path='/lista-upphamtningar' element={<ListBookPickup />} />
            <Route path='/OmOss' element={<OmOss/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
