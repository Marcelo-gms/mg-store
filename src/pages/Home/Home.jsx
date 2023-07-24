import * as C from "./HomeStyles";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// Components
import Carousel from "../../components/Carousel/Carousel";
import Loading from "../../components/Loading/Loading";
import CardProduct from "../../components/CardProduct/CardProduct";

const Home = () => {
  const [prodBanner, setProdBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProdBanner = async () => {
    setLoading(true);

    const prod = await fetch("https://fakestoreapi.com/products?limit=8");
    const prodJson = await prod.json();
    const dataProd = await prodJson;

    setProdBanner(dataProd);
    setLoading(false);
    return;
  };

  useEffect(() => {
    getProdBanner();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <C.Container>
      <C.ContainerGridBanner>
        <div className="containerLimitWidth">
          {prodBanner.length > 0 && (
            <>
              <C.CategoryOne imageurl={prodBanner[0].image}>
                
                <Link to="/store/men"></Link>
                <h2>{prodBanner[0].category}</h2>
              </C.CategoryOne>
              <C.CategoryTwo imageurl={prodBanner && prodBanner[1].image}>
              <Link to="/store/men"></Link>
                <h2>{prodBanner[1].category}</h2>
              </C.CategoryTwo>
              <C.CategoryThree imageurl={prodBanner &&  prodBanner[2].image}>
              <Link to="/store/men"></Link>
                <h2>{prodBanner[2].category}</h2>
              </C.CategoryThree>
              <C.CategoryFour imageurl={ prodBanner && prodBanner[3].image}>
              <Link to="/store/men"></Link>
                <h2>{prodBanner[3].category}</h2>
              </C.CategoryFour>
            </>
          )}
        </div>
      </C.ContainerGridBanner>

      <C.BestProducts>
        <div className="containerLimitWidth">
          <h2>Melhores Produtos</h2>
          {prodBanner &&
            prodBanner.map((prod) => (
              <CardProduct product={prod} key={prod.id} />
            ))}
        </div>
      </C.BestProducts>

      <C.ContainerBanner>
        <C.ContainerLimiteWidth  imageurl={prodBanner.length > 0 && prodBanner[6].image}>
          <div className="sideText">
            <div className="containerText">
              <h2>Conheça nossas joias</h2>
              <p>
                Nossos produtos são feitos com materia prima vindo diretamente
                do nordeste do país.
              </p>
              <Link to="/store/jewelery">Conhecer</Link>
            </div>
          </div>
          <div className="sideImg" />
        </C.ContainerLimiteWidth>
      </C.ContainerBanner>

      <Carousel products={prodBanner && prodBanner } />

      <C.ContainerBanner>
        <C.ContainerLimiteWidth
          imageurl={prodBanner.length > 0 && prodBanner[3].image}
          $reverse="true"
        >
          <div className="sideText">
            <div className="containerText">
              <h2>Conheça nossas peças de inverno</h2>
              <p>
                Feitas com o melhor pano para garantir conforto, todas as peças
                são 100% algodão.
              </p>
              <Link to="/store/men">Conhecer</Link>
            </div>
          </div>
          <div className="sideImg" />
        </C.ContainerLimiteWidth>
      </C.ContainerBanner>
    </C.Container>
  );
};

export default Home;
