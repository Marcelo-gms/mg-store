import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 15vh;
    padding: 50px 0;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset  0 0 10px rgba(0,0,0,0.3);

    p{
        color: var(--black);
        font-size: 1.2em;
        font-weight: bold;
    }

    @media screen and (max-width:425px) {

        p{
            font-size: 1em;
        }
        
    }
`;