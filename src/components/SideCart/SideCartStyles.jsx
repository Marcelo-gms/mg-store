import { styled } from "styled-components";

export const Container = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 20;
  overflow: hidden;
`;
export const ContainerVoid = styled.div`
  width: calc(100% - 500px);
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: #ffffff;
  color: #000;
  margin: 0 0 0 auto;
  opacity: 0;
  animation: visibleCart 0.5s forwards;

  @keyframes visibleCart {
    from {
      width: 50px;
      opacity: 0.5;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }
`;
export const ContainerCartHeader = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  p,
  svg {
    font-size: 1.2em;
  }
`;
export const ContainerCartBody = styled.div`
  width: 100%;
  height: calc(100% - 20em);
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    width: 90%;
    max-height: 10px;
    border-radius: 10px;
    background-color: #b416fd;
  }
`;
export const ContainerCartProduct = styled.div`
  width: 100%;
  min-height: 7em;
  display: flex;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.5);
  gap: 10px;
  background-color: #fff;
  padding-left: 0.5em;
  

  .centerProduct {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    
  }

  .containerTitle,
  .containerPrice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5em;
  }

  .containerTitle {
    gap: 10px;

    p {
      font-weight: bold;
      max-width: 70%;
      max-height: 43px;
      overflow: hidden;
    }
    svg {
      cursor: pointer;
      font-size: 1.2em;
    }
  }

  .containerPrice {
    width: 100%;
    display: flex;

    .containerCounter {
      display: flex;
      align-items: center;
      gap: 0.5em;

      button {
        width: 2em;
        height: 1.5em;
        font-size: 1.2em;
        display:flex;
        justify-content: center;
        align-items: center;
        color: var(--black);
      }
    }
  }
`;

export const ContainerImgProduct = styled.div`
  width: 30%;
  min-height: 100%;
  background-color: #fff;
  background-image: url(${(props) =>props.image ? props.image : "/picture.png"});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ContainerCartFooter = styled.div`
  width: 100%;
  height: 15em;
  padding: 1em;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(61, 61, 61, 0.5);

  .centerContentFooterCart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .conatinerTotal {
    font-size: 1.2em;
  }

  .conatinerCta {
    button {
      width: 100%;
      min-height: 2em;
      font-size: 1.2em;
      padding: 0.5em;
      border: 2px solid #000;
      background-color: transparent;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        border-color: darkorchid;
      }
    }
  }
`;
