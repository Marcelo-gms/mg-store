import { styled } from "styled-components";
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ContainerGridBanner = styled.section`
  width: 100%;
  min-height: 400px;
  display: grid;
  gap: 10px;
  margin-top: 20px;
  grid-template-columns: 3fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "categoryOne categoryTwo categoryThree"
    "categoryOne categoryTwo categoryFour";

  div {
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    background-size: contain;
    position: relative;

    h2 {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 10px;
      z-index: 5;
      color: #af89ffff;
      font-size: 1.5em;
    }

    &:hover {
      opacity: 0.4;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "categoryOne categoryTwo "
      "categoryOne categoryThree ";
  }
`;

export const CategoryOne = styled.div`
  grid-area: categoryOne;
  background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryTwo = styled.div`
  grid-area: categoryTwo;
  background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryThree = styled.div`
  grid-area: categoryThree;
  background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryFour = styled.div`
  grid-area: categoryFour;
  background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// best products
export const BestProducts = styled.div`
  width: 100%;
  min-height: 500px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h2 {
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const CardProduct = styled.div`
  width: 22%;
  margin: 0.5% 0;
  height: 300px;
  max-height: 400px;
  border: 1px solid #ccc;
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

export const ConatinerBanner = styled.div`
  width: 100%;
  display: flex;

  flex-direction: ${({reverse}) => reverse ? "row-reverse" : ""};

  .sideText {
    flex: 1;
    border: 1px solid #ccc;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .containerText {
      width: 70%;
      margin: 0 auto;

      p {
        margin: 20px 0;
      }

      button {
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #ccc;
        color: #fff;
        transition: 0.5s;

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
  .sideImg {
    flex: 1;
    background-color: #fff;
    min-height: 500px;
    background-image: url(${({ imageurl }) => imageurl ? `${imageurl}` : "/picture.png"});
    background-repeat: no-repeat;
    background-position: center;

    background-size: contain;
  }
`;
