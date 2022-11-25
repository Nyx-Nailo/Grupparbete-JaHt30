import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Header, Menu } from './Components/Menu.js';
import BookTravel from './Pages/BookTravel.js';
import Layout from './Pages/Layout.js';

function App() {
    return (
        <div id="App">
            <Header />
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<div>home</div>} />
                        <Route path="/1" element={<BookTravel />} />
                        <Route path="/2" element={<Header />} />
                    </ Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
