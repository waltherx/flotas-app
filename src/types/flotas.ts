export type Asiento = {
  id: number;
  numero: number;
  flota: number;
};

export type Flota = {
  id: number;
  placa: string;
  capacidad: number;
  marca: number;
};

export type Marca = {
  id: number;
  fabricante: string;
  modelo: string;
  tipo: string;
  anio: number;
};

export type Disenio = {
  id: number;
  disttribucion: string;
  flota: number;
};
