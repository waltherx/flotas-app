"use client";

import { getAllCiudadsFn, getAllViajesFn } from "@/services/itinerarioService";
import { Ciudad } from "@/types/travels";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";

const Place = ({ placeholderProp }: { placeholderProp: string }) => {
  const { data, isError, isLoading } = useQuery<Ciudad[]>(
    ["viajes"],
    getAllCiudadsFn
  );

  if (isLoading) return <BeatLoader color="#4A6CF7" />;

  if (isError) return "Algo salio mal";

  return (
    <>
      <select
        name="rute"
        placeholder={placeholderProp}
        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
      >
        <option value="-1">{placeholderProp}</option>
        {data?.map((city: Ciudad) => (
          <option key={city.id} value={city.id}>
            {city.nombre}
          </option>
        ))}
      </select>
    </>
  );
};

export default Place;
