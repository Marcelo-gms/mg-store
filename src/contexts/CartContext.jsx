import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
import { ToastContainer, toast } from "react-toastify";

export const CartContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [productsCart, setProductsCart] = useState(() => {
    const cart = localStorage.getItem("cart");

    if (cart == null) return [];

    return JSON.parse(cart);
  });

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const addProductCart = (prod) => {
    // const cart = localStorage.getItem("cart")
    //   ? JSON.parse(localStorage.getItem("cart"))
    // : [];

    const checkIfProdIsSaved = productsCart.find((item) => item.id == prod.id);

    if (checkIfProdIsSaved) {
      toast.warn("Esse produto já está no carrinho!")
      return;
    }

    const prodSave = {
      id: prod.id,
      image: prod.image,
      price: prod.price,
      title: prod.title,
    };

    setProductsCart((prev) => {
      const updateCart = [...prev, prodSave];
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return updateCart;
    });

    toast.success("Produto adicinado com sucesso!")
  };

  const removeProductCart = (id) => {
    const productsFiltred = productsCart.filter((prod) => prod.id != id);

    setProductsCart(productsFiltred);

    localStorage.setItem("cart", JSON.stringify(productsFiltred));

    return;
  };

  // const handleShowProductCart = () => {
  //  const productsCart =
  //     localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
  //  setProductsCart(productsCart);
  // };

  // useEffect(() => {
  //   handleShowProductCart();
  // }, [setProductsCart]);

  return (
    <cartContext.Provider
      value={{
        showCart,
        handleShowCart,
        addProductCart,
        removeProductCart,
        productsCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
