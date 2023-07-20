import * as C from "./SideCartStyles";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../contexts/CartContext";

import { IoClose } from "react-icons/io5";

const SideCart = ({ show }) => {
  const { showCart, handleShowCart } = useContext(cartContext);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItens, setTotalItens] = useState(0);

  useEffect(() => {
    const productsCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const total = productsCart.reduce((prev, current) => {
      console.log(current.price);
      console.log(prev);
      return current.price + prev;
    }, 0);

    console.log(total);

    setTotal(total);

    setProducts(productsCart);
  }, []);

  const handleRemoveToCart = (id) => {
    const productsFiltred = products.filter((prod) => prod.id != id);

    setProducts(productsFiltred);

    localStorage.setItem("cart", JSON.stringify(productsFiltred));

    return;
  };

  return (
    <C.Container show={showCart}>
      <C.ContainerVoid onClick={() => handleShowCart()} />
      <C.ContainerContent>
        <C.ContainerCartHeader>
          <p>Carrinho</p>
          <IoClose onClick={() => handleShowCart()} />
        </C.ContainerCartHeader>
        <C.ContainerCartBody>
          {products.length > 0 ? (
            <>
              {products.map((prod) => (
                <C.ContainerCartProduct key={prod.id}>
                  <C.ContainerImgProduct image={prod.image} />

                  <div className="centerProduct">
                    <div className="containerTitle">
                      <p>{prod.title}</p>
                      <IoClose onClick={() => handleRemoveToCart(prod.id)} />
                    </div>
                    <div className="containerPrice">
                      <div className="containerCounter">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                      </div>
                      <h3><span>R$ </span>{prod.price}</h3>
                    </div>
                  </div>
                </C.ContainerCartProduct>
              ))}
            </>
          ) : (
            <p>Você ainda não tem itens cadastrados!</p>
          )}
        </C.ContainerCartBody>
        <C.ContainerCartFooter>
          <div className="centerContentFooterCart">
            <div className="conatinerTotal">
              <h3>Subtotal</h3>
              <h4>
                <span>R$ </span>
                {total.toFixed(2)}
              </h4>
            </div>
            <div className="conatinerCta">
              <button>Fechar pedido</button>
            </div>
          </div>
        </C.ContainerCartFooter>
      </C.ContainerContent>
    </C.Container>
  );
};

export default SideCart;
