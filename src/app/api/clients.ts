import { NextApiResponse, NextApiRequest } from 'next'
import { PrismaClient } from '@prisma/client'



export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient();
    const client = await prisma.user.findMany();
    console.log("aqui", client);
    return res.status(200).json(client);
}