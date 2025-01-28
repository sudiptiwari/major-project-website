// src/components/Progress.js
import React from 'react';
import styled from 'styled-components';

// Base section styling
const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2C3E50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3498DB;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #2C3E50;
  }
`;

const ProgressContainer = styled(Section)`
  background: white;
`;

const ProgressCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #3498DB;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: #3498DB;
      border-radius: 50%;
    }
  }

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin: 0.8rem 0;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '→';
        position: absolute;
        left: 0;
        color: #3498DB;
      }
    }
  }
`;

const Progress = () => (
  <ProgressContainer>
    <Title>Project Progress</Title>
    
    <ProgressCard>
      <h3>Data Collection</h3>
      <p>Collected approximately 1200 samples for each of the 41 Devanagari consonant conjuncts through:</p>
      <ul>
        <li>Web portal data collection</li>
        <li>Traditional handwritten samples</li>
      </ul>
    </ProgressCard>

    <ProgressCard>
      <h3>Website Development</h3>
      <p>Created a data collection website with features including:</p>
      <ul>
        <li>Digital drawing canvas</li>
        <li>Adjustable pen thickness</li>
        <li>Organized data storage system</li>
      </ul>
    </ProgressCard>

    <ProgressCard>
      <h3>Data Preprocessing</h3>
      <p>Implemented preprocessing pipeline including:</p>
      <ul>
        <li>Image binarization using Otsu's algorithm</li>
        <li>LANCZOS interpolation for resizing</li>
        <li>Data augmentation techniques</li>
      </ul>
    </ProgressCard>
  </ProgressContainer>
);

export default Progress;