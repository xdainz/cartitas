import Carousel from "../components/Carousel";
import TextMove from "../components/Textmove";

function Home() {
    document.title = "Home";
    return (
        <div className="container">
            <TextMove />
            <Carousel />
        </div>
    );
}

export default Home;
