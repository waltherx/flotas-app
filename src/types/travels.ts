export type Viaje = {
    id: number;
    llegada: string;
    salida: string;
    flota_id: number;
    ruta_id: number;
}

export type Ciudad = {
    id: number;
    nombre: string;
    descripcion: string;
    latitud: number;
    longitud: number;
    salida: string;
}

export type Ruta = {
    id: number;
    nombre: string;
    distancia: number;
    destino_id: number;
    origen_id: number;
}