import Carousel from "../components/Carousel";
import TextMove from "../components/Textmove";
import JsonProducts from "../hooks/JsonProduct";
import { useRef } from "react";



function Home() {
  document.title = "Home";

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <TextMove />
      <Carousel />
      <div className="d-flex justify-content-between ">
        <h4 >Destacado</h4>
        <a href="/Products" className="text-dark ">Ver Mas..</a>

      </div>
      <div className="position-relative ">
        <div className="scroll-container " ref={scrollRef}>
          {JsonProducts.map((product) => (
            <div className="product-carta" key={product.id}>
              <img src={product.image}
                alt={product.name}
                className="box-product-img" />
              <h3>{product.name}</h3>
              <p><strong>Precio:</strong> ${product.price}</p>
            </div>
          ))}
        </div>

        <button className="btn btn-dark scroll-button start position-absolute top-50 translate-middle-y"
          onClick={() => scroll("left")} > ‹</button>
        <button className="btn btn-dark scroll-button end position-absolute top-50 translate-middle-y"
          onClick={() => scroll("right")}> ›</button>
      </div>
    </div>
  );
}

export default Home;
