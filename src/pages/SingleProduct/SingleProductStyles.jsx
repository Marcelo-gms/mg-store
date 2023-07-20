import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    width: 100%;
    text-align: center;
    margin: 50px 0;
  }
`;

export const ContainerCentralize = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  gap: 20px;
  border: 1px solid #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SideText = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
 
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

  p{
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
      background-color: #fff;
      border: 1px solid #ffffff;
      color: #0c0c0c;
      cursor: pointer;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    &:last-child{
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
    color: #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export const SideImage = styled.div`
  flex: 1;
  width: 100%;

  background-image: url(${({ img }) => (img ? img : "/picture.png")});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;
