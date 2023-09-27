import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
`;

export const Modaldiv = styled.div`
  background-color: white;
  max-width: calc(60vw);
  max-height: calc(60vh);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
width: 100%;
height: 50% ;
`;
