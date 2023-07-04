import { api } from "@/services/api";

export default async function getTravels() {
    try {
        const response = await api.get('/rutas/v1/api/viaje')
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}