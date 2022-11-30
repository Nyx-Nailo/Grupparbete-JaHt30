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
      <NavLink to='/3'>
        <button>Bokade resor</button>
      </NavLink>
      <NavLink to='/4'>
        <button>Bokade upphämtningar</button>
      </NavLink>
    </div>
  );
}

export { Menu, Header };
