import type { NextPage } from 'next';
import Carousel from '../../components/carousel/carousel';

import NavBar from '../../components/navbar/navbar';
import Steps from '../../components/steps/steps';

const Events: NextPage = () => {
    return (
      <>
        <NavBar/>
        <div className="flex justify-center">
            <h1>Próximos eventos</h1>
        </div>
        <div className="flex justify-center">
            <Steps stepNumber={2}/>
        </div>
        <div className="mt-24 flex justify-center">
            <Carousel/>
        </div>
      </>
    )
  }
  
  export default Events