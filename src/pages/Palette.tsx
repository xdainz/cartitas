import "../assets/css/color-palette.css";
import DarkModeToggle from "../components/DarkModeToggle";

function Palette() {
    return (
        <div className="container pt-5">
            <h1>Header</h1>
            <DarkModeToggle /> dark mode toggle
            <div className="row bg-light justify-content-center">
                <p className="col-3 box text-center p-2 m-2">text shadow 1</p>
                <p className="col-3 box m text-center p-2 m-2">text shadow 2</p>
                <p className="col-3 box l text-center p-2 m-2">text shadow 3</p>
            </div>
            <button className="btn btn-primary">boton 1</button>
        </div>
    );
}

export default Palette;
