import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div id='Main'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
