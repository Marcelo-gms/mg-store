import { Outlet } from "react-router-dom";

import { CartContextProvider } from "./contexts/CartContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import { Wrapper } from "./GlobalStyles/Wrapper";

// components
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import SideCart from "./components/SideCart/SideCart";

function App() {
  return (
    <>
      <CartContextProvider>
        <SideCart />
        <Header />

        <Wrapper>
          <ToastContainer />
          <Outlet />
        </Wrapper>

        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
