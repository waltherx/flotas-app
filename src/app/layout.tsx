import Navigation from "@/components/Navigation/Navigation";
import './globals.css';

export const metadata = {
    title: 'Flotas App',
    description: 'Viajes',
    keywords: "viaje,flota,online",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <head>

            </head>
            <body>
                <div >
                    <aside className={"md:w-4/12 xl:w-1/4 2xl:w-1/5"}>
                        <Navigation/>
                    </aside>
                    <main className={"bg-slate-400 md:w-8/12 xl:w3/4 2xl:w-4/5"}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}