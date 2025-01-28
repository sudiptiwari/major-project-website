// src/components/Methodology.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const SubSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3498DB;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  h3 {
    color: #2C3E50;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: #3498DB;
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

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

const ProcessBox = styled.div`
  background: linear-gradient(135deg, #2C3E50 0%, #3498DB 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;

  h3 {
    color: white;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin: 1rem 0;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

// Update the Methodology component
const Methodology = () => (
  <Section>
    <Title>Methodology</Title>

    <SubSection>
      <h3>Data Collection</h3>
      <p>Our data collection process involves two primary approaches:</p>
      
      <h4>Web Portal Collection</h4>
      <ul>
        <li>Custom-built website for digital character input</li>
        <li>Adjustable pen thickness options for writing variation</li>
        <li>Automated storage and organization of collected samples</li>
      </ul>

      <h4>Traditional Collection</h4>
      <ul>
        <li>Physical handwriting samples from diverse demographics</li>
        <li>Structured collection process with standardized forms</li>
        <li>Digital conversion and storage protocols</li>
      </ul>
    </SubSection>

    <SubSection>
      <h3>Data Preprocessing</h3>
      <p>Our preprocessing pipeline includes:</p>
      <ul>
        <li>Image binarization using Otsu's algorithm for optimal thresholding</li>
        <li>LANCZOS interpolation for maintaining character integrity during resizing</li>
        <li>Standardization to 32x32 pixel format</li>
        <li>Data augmentation techniques including rotation, scaling, and brightness adjustment</li>
      </ul>
    </SubSection>

    <SubSection>
      <h3>Model Architecture</h3>
      <p>We utilize AlexNet with transfer learning, featuring:</p>
      <ul>
        <li>Five convolutional layers for feature extraction</li>
        <li>Three fully connected layers for classification</li>
        <li>ReLU activation functions</li>
        <li>Dropout layers for preventing overfitting</li>
      </ul>
    </SubSection>

    <SubSection>
      <h3>Training Approach</h3>
      <p>Our training methodology involves:</p>
      <ul>
        <li>Transfer learning using pre-trained AlexNet weights</li>
        <li>Fine-tuning of fully connected layers</li>
        <li>Batch processing for optimal performance</li>
        <li>Cross-validation for model evaluation</li>
      </ul>
    </SubSection>
  </Section>
);

export default Methodology;