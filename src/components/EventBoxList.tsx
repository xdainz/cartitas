import type { Evento } from "../types/Evento";
import Eventbox from "./Eventbox";

function EventBoxList({ eventos }: { eventos: Evento[] }) {
    return (
        <>
            {eventos.map((evento, index) => (
                <Eventbox
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
        </>
    );
}

export default EventBoxList;
