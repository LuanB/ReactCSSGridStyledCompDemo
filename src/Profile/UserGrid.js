import React from 'react';
import styled from 'styled-components';
import { ProfileImage } from './ProfileImage';

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  grid-template-areas:
    'photo name'
    'photo label'
    'photo description';

  @media (max-width: 990px) {
    grid-template-areas:
      'photo name'
      'label . '
      'description .';
  }
`;

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`;

const Photo = styled.div`
  grid-area: photo;
`;

const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  align-self: center;
`;

const Label = styled.div`
  grid-area: label;
`;

const Description = styled.div`
  grid-area: description;
  max-width: 400px;
`;

export default () => {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>Lisa Yates</Name>
      <Label>
        <strong>423</strong> Followers
      </Label>
      <Description>
        Lorem ipsum dolor amet flexitarian tumeric beard before they sold out
        biodiesel swag. Quinoa blog artisan 90's actually, taiyaki tattooed
        coloring book. Asymmetrical paleo put a bird on it banjo poke kinfolk.
        Twee 3 wolf moon church-key, pitchfork iceland chicharrones ennui
        hoodie.
      </Description>
    </UserGridStyled>
  );
};
