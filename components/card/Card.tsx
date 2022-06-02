import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
    contract: string;
}

const imagelink = "https://billboard.com.ar/wp-content/uploads/2021/07/Captura-de-pantalla-2021-07-26-163139.jpg"

const Card = ( { title, description, image, contract }: CardProps ) => {

    return (
        <div className="card my-2 mx-1 w-70 h-90 bg-base-100 shadow-xl">
            {/* <Image 
                src={imagelink}
                alt={`Imagen Evento ${title}`} 
                width="300px"
                height="300px"
                layout="fixed">
            </Image> */}
            <figure>
                <img src={image} alt={`Imagen Evento ${title}`} className="h-80 w-80"/>
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