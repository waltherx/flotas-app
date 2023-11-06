export type Viaje = {
  id: number;
  llegada: string;
  salida: string;
  flota: number;
  ruta: number;
};

export type Ciudad = {
  id: number;
  nombre: string;
  descripcion: string;
  latitud: number;
  longitud: number;
};

export type Ruta = {
  id: number;
  nombre: string;
  distancia: number;
  origen: number;
  destino: number;
};
