import type { NextPage } from 'next'

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Footer from '../components/footer/footer';

const Checkout: NextPage = () => {
    return (
        <>
          <NavBar/>
            <div className="flex justify-center">
                <Steps stepNumber={4}/>
            </div>
            <div className="pt-8 flex justify-center">
              <h1 className='text-4xl'>¡Ya tenés tu entrada!</h1>
            </div>
            <div className="p-8 flex justify-center">
                <p className="text-xl">Un NFT fue enviado a tu wallet. Usalo para ingresar al evento.</p>
            </div>
            <div className="relative bottom-0">
                <Footer/>
            </div>
        </>
    )
  }
  
  export default Checkout