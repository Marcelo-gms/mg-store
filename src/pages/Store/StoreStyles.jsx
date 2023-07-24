import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  //background-color: var(--white);
 

  .containerLimiteWidth{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const CategoryHeader = styled.div`
width: 100%;
min-height: 5em;
padding: 50px 0;

  .title{
    text-align: center;
  }
  .ContainerChangCategory{
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
    justify-content: center;
    align-items: center;
    gap: 1em;

    a{
      width: 6em;
        min-width: 6em;
        border: 1px solid #ccc;
        background-color: transparent;
        color: var(--black);
        padding: 0.5em 1em;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;


        
    }
    
    .isActive{
          background-color: var(--black);
          color:var(--white);
        }

  }
`;


export const ContainerProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 10px 50px;

  @media screen and (max-width:480px) {

    justify-content: center;
    
  }
`;
