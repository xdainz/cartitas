import { useParams } from "react-router-dom";
import JsonProducts from "../hooks/JsonProduct";

function ProductPage() {
    const { category, id } = useParams();

    const product = JsonProducts.find(
        (prod) => prod.category === category && prod.id === id
    );

    if (!product) return <div>404 Product Not Found</div>;

    return (
        <>
            <div className="container pt-0">
                <h1>{product.name}</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <img
                            className="product-img shadow"
                            src={product.image}
                            alt={product.name + "image"}
                        ></img>
                    </div>

                    <div className="col-lg-8">
                        <p className="non-hover-subtext">{product.brand}</p>
                        <h4 className="product-price">
                            <b>${product.price}</b>
                        </h4>
                        <button className="btn btn-primary product-btn">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 product-desc">
                    <p>Descripcion producto:</p>
                    <p>{product.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
