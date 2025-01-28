// src/components/Introduction.js
// import React from 'react';
// import styled from 'styled-components';

// const Section = styled.section`
//   padding: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const Introduction = () => (
//   <Section>
//     <h2>Introduction</h2>
//     <p>Handwritten character recognition has emerged as a crucial area in computer vision and pattern recognition, focusing on developing systems that can accurately interpret and convert handwritten characters into digital form. Our project specifically addresses the challenges of Devanagari script recognition, which is used by approximately 198 writing systems worldwide[1].</p>

//     <h3>Background</h3>
//     <p>Devanagari, used in languages like Hindi, Marathi, and Sanskrit, presents unique complexities due to its intricate structure. The script includes:</p>
//     <ul>
//       <li>Basic vowels and consonants</li>
//       <li>Vowel diacritics that modify consonants</li>
//       <li>Compound characters (conjunct consonants)</li>
//       <li>Various modifiers and special symbols</li>
//     </ul>

//     <h3>Problem Statement</h3>
//     <p>Despite increasing demand for accurate OCR systems for Devanagari scripts, several challenges persist:</p>
//     <ul>
//       <li>Limited datasets for complex character forms, particularly conjunct consonants</li>
//       <li>High variability in handwriting styles affecting recognition accuracy</li>
//       <li>Complexity in handling diacritical marks and modifiers</li>
//       <li>Insufficient representation of real-world writing variations in existing datasets</li>
//     </ul>

//     <h3>Objectives</h3>
//     <ul>
//       <li>Develop a user-friendly web portal for autonomous collection of handwritten Devanagari characters</li>
//       <li>Create a comprehensive dataset including consonants, vowels, numerals, and conjunct consonants</li>
//       <li>Implement transfer learning using AlexNet for efficient character recognition</li>
//       <li>Benchmark the dataset performance using various deep learning models</li>
//       <li>Enhance accessibility and digitization of Devanagari script</li>
//     </ul>

//     <h3>Scope</h3>
//     <p>The project encompasses:</p>
//     <ul>
//       <li>Development of a dataset collection portal for gathering diverse handwriting samples</li>
//       <li>Focus on conjunct consonants to fill existing dataset gaps</li>
//       <li>Implementation of transfer learning with AlexNet for optimal performance</li>
//       <li>Comprehensive evaluation and benchmarking of recognition accuracy</li>
//       <li>Creation of a standardized dataset for future research</li>
//     </ul>
//   </Section>
// );

// export default Introduction;

// src/components/Introduction.js
import React from 'react';
import { SectionContainer, ContentBox, SectionTitle, SubSection, HighlightBox } from './styled/SectionStyles';

const Introduction = () => (
  <SectionContainer>
    <SectionTitle>Introduction</SectionTitle>
    
    <ContentBox>
      <p>The Devanagari script, used for languages like Hindi, Marathi, Sanskrit, and Nepali, is known for its intricate structure and diverse character set, including vowels, consonants, combined consonants, and numbers. Its complexity and the large number of derived characters make handwritten recognition a challenging task. While significant progress has been made in recognizing Latin-based scripts, Devanagari has not received the same level of focus. Our project addresses this gap by developing a dataset and benchmarking deep learning models, particularly Convolutional Neural Networks (CNNs), to improve handwritten Devanagari character recognition accuracy and performance.</p>
    </ContentBox>

    <ContentBox>
      <h3>Problem Statement</h3>
      <p>Despite increasing demand for accurate OCR systems for Devanagari scripts, several challenges persist:</p>
      <ul>
        <li>Limited datasets for complex character forms</li>
        <li>High variability in handwriting styles</li>
        <li>Complexity in handling diacritical marks</li>
      </ul>
    </ContentBox>

    <ContentBox>
      <h3>Objectives</h3>
      <ul>
        <li>Establish a Dataset Collection Portal</li>
        <li>Create Handwritten Devanagari Conjunct Consonants Dataset</li>
        <li>Implement Transfer Learning with AlexNet</li>
        <li>Create State-of-the-Art model for Devanagari OCR</li>
      </ul>
    </ContentBox>
  </SectionContainer>
);

export default Introduction;