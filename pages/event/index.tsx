import type { NextPage } from 'next';
import Link from 'next/link';

import NavBar from '../../components/navbar/navbar';
import Steps from '../../components/steps/steps';

const Event: NextPage = () => {
  return (
        <>
            <NavBar/>
            <div className="flex justify-center">            
                <h1>Evento: Duketo live</h1>
            </div>
            <div className="flex justify-center">
                <Steps stepNumber={3}/>
            </div>
            <div className="flex justify-center">  
                <button className="btn btn-primary mt-16">
                    <Link href="/checkout">
                        <a>Comprar</a>
                    </Link>
                </button>          
            </div>            
        </>
)
}

export default Event