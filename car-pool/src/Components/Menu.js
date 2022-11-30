import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div id='header'>
      <h1>Title</h1>
    </div>
  );
}

function Menu() {
  return (
    <div id='menu'>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/1'>
        <button>Boka resa</button>
      </NavLink>
      <NavLink to='/2'>
        <button>Boka upphämtning</button>
      </NavLink>
    </div>
  );
}

export { Menu, Header };
