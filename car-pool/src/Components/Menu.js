import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div id='header'>
      <h1>CarPool</h1>
    </div>
  );
}

function ListMenu({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.url}
          style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' })}>
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

function Menu() {
  const [show, setShow] = useState(false);

  const pages = [
    { label: 'Startsida', url: '/' },
    { label: 'Boka resa', url: '/boka-resa' },
    { label: 'Boka upphämtning', url: '/boka-upphamtning' },
    { label: 'Lista resor', url: '/lista-resor' },
    { label: 'Lista upphämtningar', url: '/lista-upphamtningar' },
  ];

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
          <div
            id='myDropdown'
            className='dropdown-content'
            onClick={() => {
              setShow(!show);
            }}>
            <ListMenu items={pages} />
          </div>
        )}
      </div>
      <div id='menu'>
        <ListMenu items={pages} />
      </div>
    </>
  );
}

export { Menu, Header };
