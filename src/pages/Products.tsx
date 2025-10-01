import { useParams } from "react-router";
import CardGrid from "../components/CardGrid";
import JsonProducts from "../hooks/JsonProduct";
import NotFound from "./404";
import { useEffect, useState, useMemo } from "react";

function Products() {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

    // usa useMemo para updatear la lista solo cuando cambia su contenido
    const categorizedProducts = useMemo(() => {
        return category
            ? JsonProducts.filter((prod) => prod.category === category)
            : JsonProducts;
    }, [category]);

    const [displayedProducts, setDisplayedProducts] =
        useState(categorizedProducts);

    const title = category ? category : "Productos";

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = categorizedProducts.filter((product) =>
            product.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedProducts(results);
    }, [searchTerm, categorizedProducts]);

    // si no hay categoria manda a 404
    if (category && categorizedProducts.length < 1) {
        return <NotFound />;
    }

    return (
        <div className="container">
            <h1 className="text-center">{title}</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="card shadow border-0 p-3">
                        <h4>Busqueda Avanzada</h4>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    <CardGrid products={displayedProducts} />
                </div>
            </div>
        </div>
    );
}

export default Products;
