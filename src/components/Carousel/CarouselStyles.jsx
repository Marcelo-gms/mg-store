import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  //margin: 20px 0;
  background-color: var(--white);
  
  

  h2 {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;

    @media screen and (max-width:1200px) {
      padding-left: 10px;
      
    }
    
  }

  .carousel {
    width: 100%;
    max-width: 1210px;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    cursor: grab;
    padding: 0 10px;
    

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
  box-shadow: 0 0 10px rgba(0,0,0,0.3);

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

export const BoxDescription = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  gap: 15px;
  margin-top: 20px;
  position: absolute;
  left: 0;
  padding: 10px;
  

  p {
    width: 100%;
    color: #000;
    height: 2.2em;
    overflow: hidden;
  }

  span{
    width: calc(50% - 10px);
  }

  a{
    width: 50%;
    width: calc(50% - 10px);
    border: 1px solid var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2em;
  }
`;
