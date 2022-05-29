import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Footer from '../components/footer/footer';

const Event: NextPage = ( ) => {

    const router = useRouter();
    const query = router.query;
    const name = query?.title;
    const description = query?.description;
    const image = query?.image;

  return (
        <>
            <NavBar/>
            <div className="flex justify-center">
                <Steps stepNumber={3}/>
            </div>
            <div className="m-8 flex justify-center">
                <h1 className="text-4xl">{name}</h1>
            </div>
            <div className="m-4 flex justify-center">
                <h1 className="text-xl">{description}</h1>
            </div>
            <div className="m-4 flex justify-center">
                <img src={image} alt={`Imagen Evento ${name}`} className='h-96 w-96'/>
            </div>
            <div className="flex justify-center">
                <Link href="/checkout">
                    <a className="btn btn-primary m-16">Comprar</a>
                </Link>
            </div>
            <Footer/>
        </>
    );
}

export default Event