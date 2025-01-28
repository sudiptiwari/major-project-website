// src/components/styled/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #2C3E50 0%, #3498DB 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInDown 0.8s ease-out;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.9;
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;