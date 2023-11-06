import { Ciudad, Ruta, Viaje } from "@/types/travels";
import api from "./api";

export const getAllViajesFn = async () => {
  const response = await api.get<Viaje[]>(`itinerario/viaje/`);
  return response.data;
};

export const getViajeFn = async (id: string) => {
  const response = await api.get<Viaje>(`itinerario/viaje/${id}/`);
  return response.data;
};

export const getAllCiudadsFn = async () => {
  const response = await api.get<Ciudad[]>(`itinerario/ciudad/`);
  return response.data;
};

export const getCiudadFn = async (id: string) => {
  const response = await api.get<Ciudad>(`itinerario/ciudad/${id}/`);
  return response.data;
};

export const getAllRutasFn = async () => {
  const response = await api.get<Ruta[]>(`itinerario/ruta/`);
  return response.data;
};

export const getRutaFn = async (id: string) => {
  const response = await api.get<Ruta>(`itinerario/ruta/${id}/`);
  return response.data;
};
