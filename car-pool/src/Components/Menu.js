import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div id='header'>
      <h1>CarPool</h1>
    </div>
  );
}

function Menu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div id='dropdown'>
        <button
          onClick={() => {
            setShow(!show);
          }}>
          Meny
        </button>
        {show && (
          <div id='myDropdown' className='dropdown-content'>
            <NavLink
              to='/'
              onClick={() => {
                setShow(!show);
              }}>
              Startsida
            </NavLink>
            <NavLink
              to='/boka-resa'
              onClick={() => {
                setShow(!show);
              }}>
              Boka resa
            </NavLink>
            <NavLink
              to='/boka-upphamtning'
              onClick={() => {
                setShow(!show);
              }}>
              Boka upphämtning
            </NavLink>
            <NavLink
              to='/lista-resor'
              onClick={() => {
                setShow(!show);
              }}>
              Lista resor
            </NavLink>
            <NavLink
              to='/lista-upphamtningar'
              onClick={() => {
                setShow(!show);
              }}>
              Lista upphämtningar
            </NavLink>
          </div>
        )}
      </div>
      <div id='menu'>
        <NavLink to='/'>Startsida</NavLink>
        <NavLink to='/boka-resa'>Boka resa</NavLink>
        <NavLink to='/boka-upphamtning'>Boka upphämtning</NavLink>
        <NavLink to='/lista-resor'>Lista resor</NavLink>
        <NavLink to='/lista-upphamtningar'>Lista upphämtningar</NavLink>
      </div>
    </>
  );
}

export { Menu, Header };
