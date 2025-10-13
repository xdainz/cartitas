import type { Evento } from "../types/Evento";
import EventBox from "./EventBox";

function EventBoxList({ eventos }: { eventos: Evento[] }) {
    return (
        <div className="gridbox-event">
            {eventos.map((evento, index) => (
                <EventBox
                    id={evento.id}
                    nombreEvento={evento.nombreEvento}
                    organizador={evento.organizador}
                    tipoEvento={evento.tipoEvento}
                    fecha={evento.fecha}
                    hora={evento.hora}
                    ubicacion={evento.ubicacion}
                    descripcion={evento.descripcion}
                    key={index}
                />
            ))}
        </div>
    );
}

export default EventBoxList;
