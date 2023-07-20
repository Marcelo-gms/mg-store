import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = ()=>{
    setShowCart(!showCart)
  }

  return (
    <cartContext.Provider value={{showCart, handleShowCart}}>{children}</cartContext.Provider>
  );
};
