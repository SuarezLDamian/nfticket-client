import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
    contract: string;
}

const Card = ( { title, description, image, contract }: CardProps ) => {

    return (
        <div className="card m-2 w-70 h-90 bg-base-100 shadow-xl">
            <figure className="max-h-xs max-w-xs">
                <img src={image} alt={`Imagen Evento ${title}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={{
                        pathname: "/event", 
                        query: { title: title, description: description, image: image, contract: contract }}
                    }>
                        <a className="btn btn-primary">Quiero ir</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;