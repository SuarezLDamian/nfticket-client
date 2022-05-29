import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Footer from '../components/footer/footer';
import CardSingle from '../components/cardSingle/cardSingle';

const Event: NextPage = ( ) => {

    const router = useRouter();
    const query = router.query;
    const name = query?.title as string;
    const description = query?.description as string;
    const image = query?.image as string;

    const PRICE = 10;
    const QUANTITY = 200;

    return (
        <>
            <NavBar/>
            <div className="flex justify-center">
                <Steps stepNumber={3}/>
            </div>
            <div className="mt-8 flex justify-center">
                <h1 className="text-4xl sm:text-6xl">{name}</h1>
            </div>
            <div className="mt-4 flex justify-center">
                <h2 className="text-xl">{description}</h2>
            </div>
            <div className="py-4 sm:px-16 xl:px-24 flex justify-center">            
                <CardSingle title={name} description={description} image={image} value={PRICE} quantity={QUANTITY}/>        
            </div>
            <Footer/>
        </>
    );
}

export default Event