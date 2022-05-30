import type { NextPage } from 'next';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Card from '../components/card/Card';
import Footer from '../components/footer/footer';

import useGetEvents from '../hooks/useGetEvents';

const Events: NextPage = () => {

	const events = useGetEvents();

    return (
      <>
        <NavBar/>        
        <div className="flex justify-center">
            <Steps stepNumber={2}/>
        </div>
        <div className="mt-8 flex justify-center">
          <h1 className="text-4xl sm:text-6xl">Próximos eventos</h1>
        </div>
        <div className="py-4 lg:px-32 xl:px-40 2xl:px-60 3xl:px-96 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">        
            {
              events.map((event, index) => (   
                <div key={index} className='flex justify-center'>             
                  <Card key={index} description={event.description} title={event.title} image={event.image} />
                </div>
              ))
            }
        </div>
        <div className="relative bottom-0">
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Events