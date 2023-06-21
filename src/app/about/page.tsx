import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const page = () => {
    return (
        <>
            <Breadcrumb
                pageName="Nosotros"
                description="lokango."
            />
            <h2 className='text-center text-white text-opacity-60 bg-slate-600'>Nosotros</h2>
            <div>
                <Image className="m-4 p-2 justify-end" src={"next.svg"} width={100} height={100} alt="foto de un bus" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero porro, quae eius voluptatibus tempora veritatis perferendis sequi? Cumque, explicabo. Aut, optio quo possimus ad molestiae ullam repellendus dolor accusantium!
            </div>
        </>

    );
}


export default page