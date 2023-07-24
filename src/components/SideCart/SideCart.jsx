import * as C from "./SideCartStyles";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../contexts/CartContext";

import { IoClose } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";

const SideCart = ({ show }) => {
  const { showCart, handleShowCart, removeProductCart, productsCart } =
    useContext(cartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = productsCart.reduce((prev, current) => {
      return current.price + prev;
    }, 0);

    setTotal(total);
  }, [productsCart]);

  return (
    <C.Container show={showCart ? showCart : undefined}>
      <C.ContainerVoid onClick={() => handleShowCart()} />
      <C.ContainerContent>
        <C.ContainerCartHeader>
          <p>Carrinho</p>
          <IoClose onClick={() => handleShowCart()} />
        </C.ContainerCartHeader>
        <C.ContainerCartBody>
          {productsCart.length > 0 ? (
            <>
              {productsCart.map((prod) => (
                <C.ContainerCartProduct key={prod.id}>
                  <C.ContainerImgProduct image={prod && prod.image} />

                  <div className="centerProduct">
                    <div className="containerTitle">
                      <p>{prod.title}</p>
                      <BiTrash onClick={() => removeProductCart(prod.id)} />
                    </div>
                    <div className="containerPrice">
                      <div className="containerCounter">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                      </div>
                      <h3>
                        <span>R$ </span>
                        {prod.price}
                      </h3>
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
