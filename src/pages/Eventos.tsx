import EventBoxList from "../components/EventBoxList";
import JsonEvento from "../hooks/JsonEvento";

function Eventos() {
    return (
        <div className="container">
            <h1>Eventos</h1>
            <p>Lista de próximos eventos en los que participamos</p>
            <EventBoxList eventos={JsonEvento} />
        </div>
    );
}

export default Eventos;
