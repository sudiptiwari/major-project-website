// src/components/styled/NavigationStyles.js
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    color: #2C3E50;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: #3498DB;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover:after {
      width: 100%;
    }

    &.active {
      color: #3498DB;
      &:after {
        width: 100%;
      }
    }
  }
`;