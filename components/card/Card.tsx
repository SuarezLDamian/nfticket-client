import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Card = ( { title, description, image }: CardProps ) => {

    return (
        <div className="card m-2 w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Duki Velez" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href={{
                            pathname: "/event", 
                            query: { title: title, description: description, image: image }}
                        }>
                            <a>Quiero ir</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;