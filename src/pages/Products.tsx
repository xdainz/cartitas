import { useParams } from "react-router";
import CardGrid from "../components/CardGrid";
import JsonProducts from "../hooks/JsonProduct";
import { useEffect, useState, useMemo } from "react";
import SearchBox from "../components/SearchBox";

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

    let isAccesorio = false;
    let isJuegoMesa = false;

    // checkea la categoria para ver q campos mostrar en el componente de busqueda
    switch (category) {
        case "Accesorios":
            isAccesorio = true;
            break;

        case "Juegos De Mesa":
            isJuegoMesa = true;
            break;

        case "TCG":
            isJuegoMesa = false;
            isAccesorio = false;
            break;

        default:
            isAccesorio = true;
            isJuegoMesa = true;
            break;
    }

    return (
        <div className="container">
            <h1 className="text-center">{title}</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <SearchBox
                        onChange={handleSearchChange}
                        isAccesorio={isAccesorio}
                        isJuegoMesa={isJuegoMesa}
                    />
                </div>

                <CardGrid products={displayedProducts} />
            </div>
        </div>
    );
}

export default Products;
