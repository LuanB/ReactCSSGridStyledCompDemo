import React from 'react';
import { Posts } from '../Posts/index';
import { Image } from '../App';
import { ImageLink } from '../Components/ImageLink';
import styled, { css, createGlobalStyle } from 'styled-components';
import { PostGrid, InfoGrid } from './PostGrid';
import { MiniUserGrid } from '../Profile/UserGrid';
import { ProfileImage } from '../Profile/ProfileImage';

const OverFlowHidden = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 25%;
  right: 25%;
  padding: 5px;
  width: 600px;
  border: 2px solid #444;
  @media (max-width: 990px) {
    left: 0;
    right: 0;
    top: ${({ top }) => top}px;
    width: auto;
  }
`;

const Modal = ({ match, history }) => {
  const image = Posts[parseInt(match.params.id, 10) - 1];
  if (!image) {
    return null;
  }
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '5000px',
        background: 'rgba(0, 0, 0, 0.8)'
      }}
    >
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <PostGrid>
          <Image inModal index={image.id} />
          <InfoGrid>
            <MiniUserGrid>
              <ProfileImage mini />
              <h3>Lisa Yates</h3>
            </MiniUserGrid>
            <div>
              <h2>{image.title}</h2>
            </div>

            <div>45 likes</div>
          </InfoGrid>
        </PostGrid>
      </ModalStyled>
    </div>
  );
};

export default Modal;