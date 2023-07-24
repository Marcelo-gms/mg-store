import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width:1200px) {
      padding: 10px;
      
    }
`;

export const ContainerLimiteWidth = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;

  h2 {
    width: 100%;
    text-align: center;
    padding: 0 0 50px;
  }
`;

export const ContainerCentralize = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  
  

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    gap: 0;
    flex-direction: column-reverse;
    background-color: var(--white);
  }
`;

export const SideText = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    background-color: var(--white);
  }
`;
export const ContainerDescription = styled.div`
  width: 100%;
  min-height: 200px;

  margin: 0 auto;
  display: flex;
  justify-content: center;

  p {
    font-size: 1.2em;
  }
`;
export const ContainerQty = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.2em;
  }

  .containerCount {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      min-width: 3em;
      font-size: 1.4em;
      height: 1.2em;
      background-color: transparent;
      border: 1px solid var(--grey);
      color: #0c0c0c;
      cursor: pointer;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    &:last-child {
      width: 100%;
    }
  }
`;
export const ContainerAction = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1em;

  button {
    width: 50%;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid #ccc;
    color: var(--black);
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      color: var(--white);
    }
  }
`;

export const SideImage = styled.div`
  flex: 1;
  width: 100%;

  background-image: url(${({ img }) => img || "/picture.png"});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;
