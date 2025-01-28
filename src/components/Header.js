// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Handwritten Devanagari Character Recognition</h1>
      <h2>Dataset Creation and Performance Benchmarking with Transfer Learning on AlexNet</h2>
    </HeaderContainer>
  );
};

export default Header;
