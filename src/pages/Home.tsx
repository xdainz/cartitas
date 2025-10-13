import Carousel from "../components/Carousel";
import TextMove from "../components/Textmove";

function Home() {
    document.title = "Home";
    return (
        <div className="container">
            <TextMove />
            <Carousel />
            <div >
                <h4 >Destacado</h4>
            </div>
            <div>


            </div>


        </div>
    );
}

export default Home;
