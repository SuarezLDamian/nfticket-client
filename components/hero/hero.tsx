import Link from "next/link";

const Hero = () => {
    return (
            <div className="hero min-h-screen" style={{backgroundImage: "url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Entradas en formato NFT</h1>
                    <p className="py-6">Una nueva forma de comprar entradas para tus eventos favoritos de forma rápida, segura y anónima.</p>
                    <p className="py-4 text-xl">Conectá tu wallet y probalo ahora.</p>
                    <Link href="/events">
                        <a className="btn btn-primary">Próximos eventos</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;