// src/components/styled/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Base styles and CSS reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', 'Noto Sans Devanagari', sans-serif;
    line-height: 1.6;
    background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
    color: #2C3E50;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  /* List styles */
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Transitions */
  a, button {
    transition: all 0.3s ease;
  }
`;