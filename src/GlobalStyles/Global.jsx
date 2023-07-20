import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #282433ff;
        color: #f7f7f7;
        font-family: Arial, Helvetica, sans-serif;
        position: relative;

        &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: #282433ff;
  }
  &::-webkit-scrollbar-thumb {
    
    border-radius: 10px;
    background-color: #6e6d6d;
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
