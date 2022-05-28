import type { NextPage } from 'next';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Carousel from '../components/carousel/carousel';
import Card from '../components/card/Card';
import Footer from '../components/footer/footer';

const events = [{
    title: 'Duki',
    description: 'El duketo en vivo en el estadio Velez',
  },
  {
    title: 'Coldplay',
    description: 'Uno que canta temitas',
  },
  {
    title: 'Alan gomez',
    description: 'Turreo edition',
  },
  {
    title: 'Kenlo',
    description: 'Kenlo live session',
  },
  {
    title: 'Tiesto',
    description: 'Tuchi tuchi',
  },
];

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
        <div className="m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">        
            {
              events.map((event, index) => (   
                <div key={index} className='flex justify-center'>             
                  <Card key={index} description={event.description} title={event.title} />
                  </div>
              ))
            }
        </div>
        {// Carousel if mobile
        /* <div className="mt-24 flex justify-center">
            <Carousel>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Carousel>
        </div> */}
        <Footer/>
      </>
    )
  }
  
  export default Events