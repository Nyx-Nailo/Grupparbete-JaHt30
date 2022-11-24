import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Header, Menu } from './Components/Menu.js'
import BookTravel from './Pages/BookTravel.js'

function App() {
    return (
        <div id="App">
            <Header />
            <Router>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<div>home</div>} />
                    <Route exact path="/1" element={<BookTravel />} />
                    <Route exact path="/2" element={<Header />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
