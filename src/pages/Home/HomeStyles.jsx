import { styled } from "styled-components";
export const Container = styled.div`
  width: 100%;
  //overflow: hidden;
`;

export const ContainerGridBanner = styled.section`
  width: 100%;
  padding: 50px 0;

  .containerLimitWidth {
    width: 100%;
    max-width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    display: grid;
    gap: 10px;

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
      background-position: top;
      background-attachment: local;
      background-size: contain;
      position: relative;
      //box-shadow: 0 0 10px var(--alpha);
      border: 1px solid #ccc;

      h2 {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 10px;
        z-index: 5;
        color: #af89ffff;
        font-size: 1.5em;
      }
      a{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        
      }

      
    }

    @media screen and (max-width: 1200px) {
    padding: 50px 10px;
  }

    @media screen and (max-width: 768px) {
      min-height: 600px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "categoryOne categoryTwo "
        "categoryThree categoryFour ";
    }
  }
`;

export const CategoryOne = styled.div`
  grid-area: categoryOne;
  background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryTwo = styled.div`
  grid-area: categoryTwo;
  background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryThree = styled.div`
  grid-area: categoryThree;
  background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});
`;
export const CategoryFour = styled.div`
  grid-area: categoryFour;
  background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});

  
`;

// best products
export const BestProducts = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 50px 0;
  background-color: var(--white);

  .containerLimitWidth {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;


    h2 {
      width: 100%;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
      justify-content: center;
      padding: 0;
    }
  }
  
  @media screen and (max-width: 1200px) {
    padding: 50px 10px;
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

  background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});
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

export const ContainerBanner = styled.div`
  width: 100%;
  padding: 50px 0;

  @media screen and (max-width: 1200px) {
      padding: 50px 10px;
    }

`;

export const ContainerLimiteWidth = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    box-shadow: 0 0 10px var(--alpha);

    


    flex-direction: ${({ reverse }) => (reverse && "row-reverse")};

    .sideText {
      flex: 1;
      //border: 1px solid #ccc;
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
          color: var(--light-black);
        }

        a {
          padding: 10px 20px;
          background-color: transparent;
          border: 1px solid var(--light-black);
          color: var(--blak);
          transition: 0.6s;

          &:hover {
            background-color: var(--black);
            color: var(--white);
          }
        }
      }
    }
    .sideImg {
      flex: 1;
      background-color: #fff;
      min-height: 500px;
      background-image: url(${({ imageurl }) =>imageurl ? `${imageurl}` : "/picture.png"});
      background-repeat: no-repeat;
      background-position: center;

      background-size: contain;
    }
`

