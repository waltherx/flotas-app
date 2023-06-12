import Link from 'next/link';

type link = {
    label: string;
    route: string;
}

const links: Array<link> = [
    { label: 'Home', route: '/' },
    { label: 'Ruta', route: '/ruta' },
    { label: 'Cliente', route: '/client' },
    { label: 'Nosotros', route: '/about' }
]

export default function Navigation() {

    return (
        <ul className={"space-y-1"}>
            {
                links.map(({ label, route }) => (
                    <li key={route}>
                        <Link className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700' href={route}>
                            {label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}