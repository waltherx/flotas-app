import BusTicket from '@/components/BusTicket';
import axios from 'axios';

async function get_flotas() {
    try {
        const response = await axios.get('https://flotas-backend.onrender.com/flotas/v1/api/flota/');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const page = async () => {
    const data = await get_flotas();
    console.log(data);
    return (

        <>
            <BusTicket />
        </>
    );
}

export default page