export interface Evento {
    id?: string;
    nombreEvento: string;
    organizador: string;
    tipoEvento: string;
    fecha: string;
    hora: string;
    ubicacion: string; // locacion para google maps
    descripcion: string;
}