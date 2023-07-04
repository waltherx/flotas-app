import { NextResponse } from "next/server";
import { api } from "@/services/api";

export async function GET(
    request: Request,
) {
    const viajes = (await api.get('/rutas/v1/api/ciudad')).data;
    return NextResponse.json(viajes);
}
