import type { NextPage } from 'next';

import NavBar from '../../components/navbar/navbar';
import Steps from '../../components/steps/steps';
import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/footer';

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
        {/* <div className="mt-24 flex justify-center">
            <Carousel/>
        </div> */}
        <div className="grid grid-cols-4 gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Footer/>
      </>
    )
  }
  
  export default Events