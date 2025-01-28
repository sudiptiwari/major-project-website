// src/components/styled/SectionStyles.js
import styled from 'styled-components';

export const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ContentBox = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  border-left: 4px solid #3498DB;
`;

export const SectionTitle = styled.h2`
  color: #2C3E50;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498DB;
`;

export const SubSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const HighlightBox = styled.div`
  background: linear-gradient(135deg, #3498DB 0%, #2C3E50 100%);
  color: white;
  padding: 2rem;
  border-radius: 6px;
  margin: 2rem 0;

  h3 {
    color: white;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin: 1rem 0;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '→';
        position: absolute;
        left: 0;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;