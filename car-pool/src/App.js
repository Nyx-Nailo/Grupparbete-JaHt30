import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Menu } from './Components/Menu.js';

import Layout from './Pages/Layout.js';

import BookTravel from './Pages/BookTravel.js';
import BookPickup from './Pages/BookPickup.js';
import ListBookPickup from './Pages/ListBookPickup';
import ListBookTravel from './Pages/ListBookTravel';

const Main = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit justo sed purus ornare feugiat. Fusce enim massa, placerat id sagittis aliquam, varius at orci. Suspendisse nulla augue, iaculis non volutpat sed, vulputate id risus.
        Integer sed felis nec nulla viverra dictum ut sit amet ex. Etiam fermentum neque felis, nec varius dui porta ac. Suspendisse potenti. Aenean maximus pulvinar vestibulum. Donec auctor nisi et lorem mollis, et molestie nibh vulputate. Morbi
        volutpat nisi viverra ante condimentum, sit amet molestie lorem congue. Nullam blandit sapien in condimentum faucibus. In eu ipsum at dolor scelerisque cursus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit justo sed purus ornare feugiat. Fusce enim massa, placerat id sagittis aliquam, varius at orci. Suspendisse nulla augue, iaculis non volutpat sed, vulputate id risus.
        Integer sed felis nec nulla viverra dictum ut sit amet ex. Etiam fermentum neque felis, nec varius dui porta ac. Suspendisse potenti. Aenean maximus pulvinar vestibulum. Donec auctor nisi et lorem mollis, et molestie nibh vulputate. Morbi
        volutpat nisi viverra ante condimentum, sit amet molestie lorem congue. Nullam blandit sapien in condimentum faucibus. In eu ipsum at dolor scelerisque cursus.
      </p>
    </div>
  );
};

function App() {
  return (
    <div id='App'>
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/1' element={<BookTravel />} />
            <Route path='/2' element={<BookPickup />} />
            <Route path='/3' element={<ListBookTravel />} />
            <Route path='/4' element={<ListBookPickup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
