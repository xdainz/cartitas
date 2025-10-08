import "../assets/css/color-palette.css";
import Button from "../components/Button";
import DarkModeToggle from "../components/DarkModeToggle";

function Palette() {
    return (
        <div className="container my-3">
            <h1>Box</h1>

            <div className="box my-3">
                <h1>Header</h1>
                <DarkModeToggle /> dark mode toggle
            </div>

            <h2>Box Grid</h2>

            <div className="boxes my-3">
                <div className="box">
                    <h3 className="text-center">El Jose la Chupa</h3>
                    <Button text="Boton 1" />
                </div>
                <div className="box">
                    <h3 className="text-center">El Ale se la Come</h3>
                    <Button text="Boton 2" />
                </div>
            </div>
        </div>
    );
}

export default Palette;
