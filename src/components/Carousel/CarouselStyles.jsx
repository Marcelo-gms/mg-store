import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 50px 0;

  h2 {
    margin-bottom: 20px;
  }

  .carousel {
    width: 100%;
    display: flex;
    overflow: hidden;
    cursor: grab;

    .carouselItem {
      width: 100%;
      display: flex;
      gap: 20px;
    }
  }
`;


export const CardProduct = styled.div`
  flex: none;
  width: 100%;
  max-width: 200px;
  min-width: 250px;
  margin: 0.5% 0;
  height: 300px;
  max-height: 400px;
  background-color: #fff;
  padding: 10px;
  position: relative;

  &:hover {
    outline: 2px solid #c259ff;
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
`;

export const boxDescription = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  position: absolute;

  bottom: 20px;

  p {
    color: #000;
  }
`;
