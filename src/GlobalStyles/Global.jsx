import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --white:#fff;
    --grey:#ccc;
    --light-grey:#f9f9f9;
    --light-black:rgb(118, 118, 118);
    --black:#000;
    --purple:#a435f0;
    --alpha:rgba(0,0,0,0.3);
}
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--light-grey);
        color: var(--black);
        font-family: Arial, Helvetica, sans-serif;
        position: relative;

        &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--grey);
  }
  &::-webkit-scrollbar-thumb {
    
    border-radius: 10px;
    background-color: var(--light-black);
  }

        
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
        transition: all .4s;
        font-weight: bold;
        font-size: 1.2em;

        &:hover{
            color: #af89ffff;
        }
    }

    .isActive{
        color: #af89ffff;
    }






`;
