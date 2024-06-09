"use client";

import { getAllViajesFn } from "@/services/itinerarioService";
import { Viaje } from "@/types/travels";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";

const page = () => {
  const { data, isError, isLoading } = useQuery<Viaje[], Error>(
    ["viajes"],
    getAllViajesFn
  );

  if (isLoading) return <BeatLoader color="#4A6CF7" />;

  if (isError) return "☠";

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contáctese con nosotros
              </h2>
              <div className="mb-12 text-base font-medium text-body-color">
                {data?.map((viaje: Viaje) => (
                  <>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
                      <div className="p-8 flex items-center">
                        <div className="pr-4">
                          <p className="text-4xl font-bold">18th</p>
                        </div>
                        <div key={viaje.id}>
                          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {viaje.flota}
                          </div>
                          <p className="mt-2 text-gray-500 text-sm">
                            9:20 AM - 9: 40 AM
                          </p>
                          <p className="mt-2 text-gray-500">{viaje.llegada}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              no molesta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
