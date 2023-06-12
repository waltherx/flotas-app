import axios from 'axios';
import { PrismaClient } from '@prisma/client';

async function get_clients() {
    try {
        const response = await axios.get('http://localhost:3000/api/clients');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function get_clients2() {
    try {
        const prisma = new PrismaClient();
        const clients = await prisma.user.findMany();
        return clients;
    } catch (error) {

    }
}

const page = async () => {
    const data = await get_clients2();

    console.log(data);
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default page