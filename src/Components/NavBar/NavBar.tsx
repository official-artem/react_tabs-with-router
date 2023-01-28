import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const NavBar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return cn(
                'navbar-item',
                { 'is-active': isActive },
              );
            }}
          >
            Home

          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return cn(
                'navbar-item',
                { 'is-active': isActive },
              );
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};