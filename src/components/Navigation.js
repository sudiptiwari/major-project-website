// src/components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #2C3E50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #3498DB;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #3498DB;
    
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: #3498DB;
    
    &:after {
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
          Introduction
        </NavLink>
        <NavLink 
          to="/methodology" 
          className={location.pathname === '/methodology' ? 'active' : ''}
        >
          Methodology
        </NavLink>
        <NavLink 
          to="/progress" 
          className={location.pathname === '/progress' ? 'active' : ''}
        >
          Progress
        </NavLink>
        <NavLink 
          to="/team" 
          className={location.pathname === '/team' ? 'active' : ''}
        >
          Team
        </NavLink>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;