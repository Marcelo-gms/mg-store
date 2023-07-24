import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const WrapperContainer = styled.div`
    width: 100%;
    //max-width: 1200px;
    margin: 0 auto;
    min-height: 80vh;
    //border: 1px solid #ccc;
    position: relative;
`;


const Wrapper = ({children}) => {
  return (
    
    <WrapperContainer>
        <ToastContainer />
        {children}
    </WrapperContainer>
  )
}

export default Wrapper