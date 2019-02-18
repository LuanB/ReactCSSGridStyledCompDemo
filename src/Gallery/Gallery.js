import React from 'react';
import { Posts } from '../Posts';
import UserGrid from '../Profile/UserGrid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PhotoGrid } from '../Modal/PostGrid';
import { ImageLink } from '../Components/ImageLink';

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) => selected && 'color: black'};
`;

const Gallery = ({ match, location }) => {
  const cascade = location.search === `?type=cascade`;

  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink selected={!cascade} to={`${match.url}`}>
          square
        </TabLink>
        <TabLink
          selected={cascade}
          to={{ pathname: `${match.url}`, search: '?type=cascade' }}
        >
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid cascade={cascade}>
        {Posts.map((i) => (
          <ImageLink
            cascade={cascade}
            key={i.id}
            index={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // this is the trick!
              state: { modal: true }
            }}
          />
        ))}
      </PhotoGrid>
    </div>
  );
};

export default Gallery;
