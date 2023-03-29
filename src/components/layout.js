import { Outlet } from 'react-router-dom';

/**
 * Layout provides the base layout for pages in the app.
 */
function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
