import Carousel from "../components/Carousel";
import TextMove from "../components/Textmove";
import JsonProducts from "../hooks/JsonProduct";



function Home() {
    document.title = "Home";
    return (
        <div className="container">
            <TextMove />
            <Carousel />
            <div >
                <h4 >Destacado</h4>
            </div>
            <div className="boxes">
                {JsonProducts.slice(2,7
                ).map((product) => (
                    <div className="product-carta">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-himage"
                        />

                        <h3>{product.name}</h3>
                        <p><strong>Precio:</strong> ${product.price}</p>

                        
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Home;
