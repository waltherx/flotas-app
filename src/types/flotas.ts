export type Asiento = {
    name: string;
    image: string;
    designation: string;
};

export type Flota = {
    id: number;
    placa: string;
    capacidad: number;
    marca_id: number;
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
    flota_id: number;
};