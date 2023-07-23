import { styled } from "styled-components";

export const CardProduct = styled.div`
  flex: none;
  width: calc(25% - 10px);
  min-width: calc(25% - 10px);
  max-width: 18em;
  height: 300px;
  // margin: 0.5% 0;
  background-color: #fff;
  //background-color: rgba(42, 32, 52, 0);
  padding: 10px;
  position: relative;
  box-shadow: 0 0 10px var(--alpha);

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &:hover {
    outline: 2px solid #c259ff;
  }

  @media screen and (max-width: 992px) {
    width: calc(33% - 10px);
    min-width: calc(33% - 10px);
  }
  // @media screen and (max-width: 768px) {
  //   width: 30%;
  //   min-width: none;
  //}

  @media screen and (max-width: 600px) {
    width: calc(50% - 10px);
    min-width: none;
  }
  @media screen and (max-width: 480px) {
    min-width: 90%;
  }
`;

export const CardImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;

  background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;
`;

export const boxDescription = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  //position: absolute;

  bottom: 20px;

  p {
    color: #000;
  }
`;
