"use client"

import useSWR from 'swr'
import { fetcher } from '@/services/api'
import { BeatLoader } from "react-spinners"

type ViajeProp = {
    id: number;
    llegada: string;
    salida: string;
}

const Place = ({ placeholderProp }: { placeholderProp: string }) => {

    const { data, error, isLoading } = useSWR('/api/viajes',fetcher);

    if (isLoading) return <BeatLoader color="#4A6CF7" />

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <select name="rute"
                placeholder={placeholderProp}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" >
                <option value="-1">{placeholderProp}</option>
                {data.map((city: ViajeProp) => (
                    <option key={city.id} value={city.id}>{city.llegada}</option>
                ))}
            </select>

        </>
    );
}

export default Place;