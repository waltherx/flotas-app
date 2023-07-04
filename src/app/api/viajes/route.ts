import { NextResponse } from "next/server";
import { api } from "@/services/api";

export async function GET(
    request: Request,
) {
    const viajes = (await api.get('/rutas/v1/api/viaje')).data;
    return NextResponse.json(viajes);
}
