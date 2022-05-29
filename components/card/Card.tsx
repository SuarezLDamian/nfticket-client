import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Card = ( { title, description, image }: CardProps ) => {

    return (
        <div className="card m-2 w-84 lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={`Imagen Evento ${title}`} />
                {/* <Image src={"https://pbs.twimg.com/media/DhnYoVQX4AUic5G.jpg"} layout="fill" alt={`Imagen Evento ${title}`} /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={{
                        pathname: "/event", 
                        query: { title: title, description: description, image: image }}
                    }>
                        <a className="btn btn-primary">Quiero ir</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;