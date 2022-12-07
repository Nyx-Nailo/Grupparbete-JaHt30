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
              to='/1'
              onClick={() => {
                setShow(!show);
              }}>
              Boka resa
            </NavLink>
            <NavLink
              to='/2'
              onClick={() => {
                setShow(!show);
              }}>
              Boka upphämtning
            </NavLink>
            <NavLink
              to='/3'
              onClick={() => {
                setShow(!show);
              }}>
              Lista resor
            </NavLink>
            <NavLink
              to='/4'
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
        <NavLink to='/1'>Boka resa</NavLink>
        <NavLink to='/2'>Boka upphämtning</NavLink>
        <NavLink to='/3'>Lista resor</NavLink>
        <NavLink to='/4'>Lista upphämtningar</NavLink>
      </div>
    </>
  );
}

export { Menu, Header };
