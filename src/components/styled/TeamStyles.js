// src/components/styled/TeamStyles.js
import styled from 'styled-components';

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const TeamCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .photo-frame {
    width: 150px;
    height: 150px;
    margin: 2rem auto;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #3498DB;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    padding: 1.5rem;
    text-align: center;

    h3 {
      color: #2C3E50;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;