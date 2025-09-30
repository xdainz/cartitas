import CardGrid from "../components/CardGrid";

function Products() {
    return (
        <>
            <div className="row pt-3 container">
                <div className="col-sm-12 col-md-4">
                    aca va la busqueda avanzada
                </div>
                <div className="col-sm-12 col-md-8 row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    <CardGrid />
                </div>
            </div>
        </>
    );
}

export default Products;
