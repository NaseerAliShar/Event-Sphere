import React from 'react';
import { Logout } from '../index';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
    {
      name: "Events",
      slug: "/events",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !token,
    }
  ];

  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Event<span className='text-blue-600'>Sphere</span></Link>
        <nav>
          <ul className='flex items-center text-lg'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="mx-2">
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      isActive
                        ? 'inline-block px-4 py-1 text-xl font-semibold text-blue-600 rounded-full'
                        : 'inline-block px-4 py-1 text-xl font-semibold duration-200 hover:text-blue-600 rounded-full'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
            {token && <Logout />}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
