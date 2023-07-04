import getTravels from "@/actions/getTravels";

const Page = async () => {
    const data = await getTravels();

    retrun(
        <TravelsClient
            viajes={data}
        />
    );
}

export default Page;