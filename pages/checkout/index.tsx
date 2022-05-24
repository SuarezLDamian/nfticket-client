import type { NextPage } from 'next'

import NavBar from '../../components/navbar/navbar';
import Steps from '../../components/steps/steps';

const Checkout: NextPage = () => {
    return (
        <>
          <NavBar/>
            <div className="flex justify-center">            
              <h1>Checkout</h1>
            </div>
            <div className="flex justify-center">
                <Steps stepNumber={4}/>
            </div>
        </>
    )
  }
  
  export default Checkout