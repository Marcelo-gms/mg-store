import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  position: absolute;
  top: 0;
  right: 0;

  svg {
    font-size: 3em;
    color: #ffffff;
    margin-top: 80px;
    animation: loading 0.5s infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
