import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <h1>Title</h1>
        </div>
        );
}

function Menu() {
    return (
        <div>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/1"><button>Boka resa</button></NavLink>
            <NavLink to="/2"><button>skapa resa</button></NavLink>
        </div>
        );
}

export { Menu, Header };