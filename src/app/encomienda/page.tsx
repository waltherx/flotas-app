import LoadingSkeleton from "@/components/LoadingSkeleton";
import Shiping from "@/components/Shiping";
import { api } from '@/services/api'
import { Suspense } from "react";


const url = process.env.API_BASE_URL;

type Viaje = {
    id: number;
    llegada: string;
    salida: string;
    flota: number;
    ruta: number;
}

async function getData() {
    const res = await fetch(url + '/rutas/v1/api/viaje')
    if (!res.ok) {
        throw new Error('Error al optener')
    }
    return res.json()
}



const page = async () => {

    const viajes = await getData();

    return (
        <>
            <Shiping />
            <Suspense fallback={<LoadingSkeleton />}>
                {
                    viajes.map((viaje: Viaje) => (
                        <div key={viaje.id}>
                            <h2>{viaje.llegada}</h2>
                            <h2>{viaje.salida}</h2>
                            <h2>{viaje.flota}</h2>
                        </div>
                    ))
                }
            </Suspense>


        </>
    );
}

export default page