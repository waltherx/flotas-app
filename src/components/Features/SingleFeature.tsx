import { Feature } from "@/types/feature";
import Image from "next/image"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <Image className="mb-10 flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
         src={icon}
         height={80}
         width={80}
         alt="features"
        />
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        {/*<p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>*/}
      </div>
    </div>
  );
};

export default SingleFeature;
