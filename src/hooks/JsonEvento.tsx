import type { Evento } from "../types/Evento";
import eventoApi from "../data/eventos.json";

const JsonEvento: Evento[] = eventoApi.map((evento: Evento) => ({
    id: evento.id || "null",
    nombreEvento: evento.nombreEvento,
    organizador: evento.organizador,
    tipoEvento: evento.tipoEvento,
    fecha: evento.fecha,
    hora: evento.hora,
    ubicacion: evento.ubicacion,
    descripcion: evento.descripcion,
}));

export default JsonEvento;
