import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
  min-width: 300px;
  min-height: 300px;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
  margin-top: 34px;
  margin-bottom: 0;
`;

export const ErrorInfoText = styled.p`
  font-size: 14px;
  color: #2f8e89;
  white-space: pre-wrap;
  margin: 0;
`;
