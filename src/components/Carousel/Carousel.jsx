import * as C from "./CarouselStyles";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";

import CardProduct from "../CardProduct/CardProduct";

const Carousel = ({ products }) => {
  const refCarousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      refCarousel.current?.scrollWidth - refCarousel.current?.offsetWidth
    );
  }, []);

  return (
    <C.CarouselContainer>
      <h2>Tendências</h2>

      <motion.div
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        ref={refCarousel}
      >
        <motion.div
          className="carouselItem"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {products &&
            products?.map((prod) => (
              <C.CardProduct key={prod.id}>
                <C.CardImage imageurl={prod.image} />

                <C.boxDescription>
                  <p>{prod.title}</p>
                  <p>R$ {prod.price}</p>
                </C.boxDescription>
              </C.CardProduct>
            ))}
        </motion.div>
      </motion.div>
    </C.CarouselContainer>
  );
};

export default Carousel;
