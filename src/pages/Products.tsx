import { useParams } from "react-router";
import CardGrid from "../components/CardGrid";
import JsonProducts from "../hooks/JsonProduct";
import type { Product } from "../types/Product";
import NotFound from "./404";

function Products() {
    const { category } = useParams();

    // filtrar solo productos con la "categoria" q corresponda a www.paginaweb.com/products/{categoria}
    // esto al implementar la api deberia solamente hacer un GET de los productos con esa categoria
    const productlist: Product[] = JsonProducts.filter(
        (prod) => prod.category === category
    );

    if (productlist.length === 0) return <NotFound />;

    return (
        <div className="container">
            <h1 className="text-center">{category}</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    aca va la busqueda avanzada
                </div>
                <div className="col-sm-12 col-md-8 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    <CardGrid products={productlist} />
                </div>
            </div>
        </div>
    );
}

export default Products;
