import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
}

const Card = ( { title, description }: CardProps ) => {
    return (
        <div className="card m-2 w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XXAEPLZ24NC4JAAEC3NI4NVIS4.JPG" alt="Duki Velez" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href="/event">
                            <a>Quiero ir</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;