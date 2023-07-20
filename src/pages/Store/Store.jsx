import * as C from "./StoreStyles";


import { useEffect, useState } from "react";

import CardProduct from "../../components/CardProduct/CardProduct";
import Loading from "../../components/Loading/Loading";
function Category() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products${category}`);
    const resJson = await res.json();
    const data = await resJson;

    setProducts(data);

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <C.Container>
      <C.CategoryHeader>
        <h2 className="title">{!category && "Todos"}</h2>

        <div className="ContainerChangCategory">
          <button onClick={() => setCategory("")} className="isActive">
            Todos
          </button>
          <button onClick={() => setCategory("/category/men's%20clothing")}>
            Masculino
          </button>
          <button onClick={() => setCategory("/category/women's%20clothing")}>
            Feminino
          </button>
          <button onClick={() => setCategory("/category/jewelery")}>
            Jóias
          </button>
          <button onClick={() => setCategory("/category/electronics")}>
            Tecnologia
          </button>
        </div>
      </C.CategoryHeader>

      <C.ContainerProducts>
        {products &&
          products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </C.ContainerProducts>
    </C.Container>
  );
}

export default Category;
