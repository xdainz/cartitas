import type React from "react";

interface AdvancedSearchProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    isAccesorio: boolean;
    isJuegoMesa: boolean;
}

function SearchBox({
    onChange,
    isAccesorio,
    isJuegoMesa,
}: AdvancedSearchProps) {
    return (
        <>
            <div className="box">
                <h4>Busqueda</h4>
                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={onChange}
                />

                <p>precio (slider)</p>
                <label htmlFor="customRange1" className="form-label">
                    Precio
                </label>
                <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                    min={0}
                    max={1000000}
                    step={1000}
                ></input>
                <p>marca (checkbox)</p>
                {isAccesorio ? (
                    <p>unidades (checkbox (en caso de accesorios))</p>
                ) : null}
                {isJuegoMesa ? (
                    <p>cant jugadores (checkbox (en caso de juego de mesa))</p>
                ) : null}
            </div>
        </>
    );
}

export default SearchBox;
