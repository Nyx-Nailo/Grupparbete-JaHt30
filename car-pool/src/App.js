import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {Header, Menu } from './Components/Menu.js'

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Header />} />
                    <Route exact path="/1" element={<Header />} />
                    <Route exact path="/2" element={<Header />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
