import Carousel from "../components/Carousel";

function Home() {
    document.title = "Home";
    return (
        <div className="container">
            <Carousel />
        </div>
    );
}

export default Home;
