import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Entradas en formato NFT</h1>
                    <p className="py-6">Una nueva forma de comprar entradas para tus eventos favoritos de forma rápida, segura y anónima. Conectá tu wallet y probalo ahora.</p>
                    <button className="btn btn-primary">
                        <Link href="/events">
                            <a>Próximos eventos</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;