// src/components/Team.js
import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.section`
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const MemberName = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.5rem;
`;

const MemberRoll = styled.p`
  margin: 0;
  color: #666;
`;

const Team = () => {
  const teamMembers = [
    {
      name: "Sandhya Baral",
      roll: "PUL077BCT076",
      photo: "/images/sandhya.jpg"
    },
    {
      name: "Satyasa Khadka",
      roll: "PUL077BCT078",
      photo: "/images/satyasa.jpg"
    },
    {
      name: "Sudip Tiwari",
      roll: "PUL077BCT085",
      photo: "/images/sudip.jpg"
    }
  ];

  return (
    <TeamContainer>
      <h2>Our Team</h2>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <ImageContainer>
              <MemberImage 
                src={member.photo} 
                alt={member.name} 
              />
            </ImageContainer>
            <MemberName>{member.name}</MemberName>
            <MemberRoll>{member.roll}</MemberRoll>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;
