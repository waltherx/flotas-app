"use client";

import LoadingAnimate from "@/components/Lotties/LoadingAnimate";

export default function Loading() {
  return (
    <section id="features" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div
          className="wow fadeInUp w-full mx-auto text-center "
          data-wow-delay=".1s"
        >
          <div className="w-screen h-screen flex justify-center items-center">
            <LoadingAnimate />
          </div>
        </div>
      </div>
    </section>
  );
}
