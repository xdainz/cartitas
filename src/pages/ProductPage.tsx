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
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img
                            className="product-img shadow"
                            src={product.image}
                            alt={product.name + "image"}
                        ></img>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1>{product.name}</h1>
                        <p className="subtext">{product.brand}</p>
                        <h4 className="product-price">
                            <b>${product.price}</b>
                        </h4>
                        <button className="btn btn-primary product-btn">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <div className="product-desc mt-3">
                    <p>Descripcion producto:</p>
                    <p>{product.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
