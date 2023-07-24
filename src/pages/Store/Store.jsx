import * as C from "./StoreStyles";

import { useEffect, useState } from "react";

import { useParams, NavLink, Link } from "react-router-dom";

import CardProduct from "../../components/CardProduct/CardProduct";
import Loading from "../../components/Loading/Loading";
function Category() {
  //const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [title, setTitle] = useState("");

  const { category } = useParams();
  const getProducts = async (e) => {
    setLoading(true);
    setTitle("");
    let url = "";

    if (category == "men") {
      setTitle("Masculino");

      url = "/category/men's%20clothing";
    }

    if (category == "women") {
      setTitle("Feminino");
      url = "/category/women's%20clothing";
    }

    if (category == "jewelery") {
      setTitle("Jóias");
      url = "/category/jewelery";
    }

    if (category == "eletronics") {
      setTitle("Eletrônicos");
      url = "/category/electronics";
    }

    const res = await fetch(`https://fakestoreapi.com/products${url}`);
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
      <div className="containerLimiteWidth">
      <C.CategoryHeader>
        <h2 className="title">{title ? title : "Todos"}</h2>

        <div className="ContainerChangCategory">
          <NavLink to="/store" className={!title ? "isActive" : ""}>
            Todos
          </NavLink>
          <NavLink
            to="/store/men"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Masculino
          </NavLink>
          <NavLink
            to="/store/women"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Feminino
          </NavLink>
          <NavLink
            to="/store/jewelery"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Jóias
          </NavLink>
          <NavLink
            to="/store/eletronics"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Eletrônicos
          </NavLink>
        </div>
      </C.CategoryHeader>

      <C.ContainerProducts>
        {products &&
          products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </C.ContainerProducts>
      </div>
    </C.Container>
  );
}

export default Category;
