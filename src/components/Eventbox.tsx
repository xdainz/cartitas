import type { Evento } from "../types/Evento";

const MAPS_API_KEY = "test";
function Eventbox(event: Evento) {
    return (
        <div className="box event-box mb-4">
            <h3>{event.nombreEvento}</h3>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                <div className="col event-desc">
                    <h6>
                        {event.fecha} - {event.hora}
                    </h6>
                    <h6>Tipo: {event.tipoEvento}</h6>
                    <h6>Organiza: {event.organizador}</h6>
                    <p>{event.descripcion}</p>
                    <button className="button w-100">Ver Mas</button>
                </div>
                <div className="col event-map">
                    <iframe
                        className="map-iframe"
                        loading="lazy"
                        src={
                            "https://www.google.com/maps/embed/v1/place?key=" +
                            MAPS_API_KEY +
                            "&q=Space+Needle,Seattle+WA"
                        }
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Eventbox;
