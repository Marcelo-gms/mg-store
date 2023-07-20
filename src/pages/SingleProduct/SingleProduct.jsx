import * as C from "./SingleProductStyles";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Utils
import { getData } from "../../utils/getData";

// loading
import Loading from "../../components/Loading/Loading";

// components
import Carousel from "../../components/Carousel/Carousel";

const SingleProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [products, setProducts] = useState(1);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const handleCount = (e) => {
    if (e.target.innerText == "-") {
      if (count - 1 == 0) {
        setCount(1);
        return;
      }

      setCount(count - 1);
      return;
    }

    if (e.target.innerText == "+") {
      setCount(count + 1);
      return;
    }
  };

  const getProduct = async () => {
    const res = await getData(`products/${id}`);

    setData(res);

    return;
  };

  const getProducts = async () => {
    setLoading(true);

    const res = await getData(`products`);

    setProducts(res);

    setLoading(false);

    return;
  };

  useEffect(() => {
    getProduct();
    getProducts();
  }, [id]);

  const handleSaveToCart = (prod) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const checkIfProdIsSaved =  cart.find(item => item.id == prod.id);

    if (checkIfProdIsSaved) {
      console.log("Este produto já está salvo!");
      return;
    }

    const prodSave = {
      id: prod.id,
      image: prod.image,
      price: prod.price,
      title: prod.title,
    };

    cart.push(prodSave);

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Produto salvo com sucesso!");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <C.Container>
      {data && (
        <>
          <h2>{data && data.title}</h2>

          <C.ContainerCentralize>
            <C.SideText>
              <C.ContainerDescription>
                <p>{data.description}</p>
              </C.ContainerDescription>

              <C.ContainerQty>
                <p>Quantity</p>
                <div className="containerCount">
                  <button onClick={(e) => handleCount(e)}>-</button>
                  <p>{count}</p>
                  <button onClick={(e) => handleCount(e)}>+</button>
                </div>
                <p>$ {data.price * count}</p>
              </C.ContainerQty>
              <C.ContainerAction>
                <button>Buy</button>
                <button onClick={() => handleSaveToCart(data)}>
                  add to car
                </button>
              </C.ContainerAction>
            </C.SideText>
            <C.SideImage img={data.image} />
          </C.ContainerCentralize>
          <Carousel products={products} />
        </>
      )}
    </C.Container>
  );
};

export default SingleProduct;
