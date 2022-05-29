import type { NextPage } from 'next';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Card from '../components/card/Card';
import Footer from '../components/footer/footer';

const events = [{
    title: 'Duki',
    description: 'El duketo en vivo en el estadio Velez',
    image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XXAEPLZ24NC4JAAEC3NI4NVIS4.JPG',
  },
  {
    title: 'Coldplay',
    description: 'Uno que canta temitas',
    image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/IPKG37UJIVGJFLZ4KASRLN64RM.jpg',
  },
  {
    title: 'Cazzu',
    description: 'La más turra guacho',
    image: 'https://pbs.twimg.com/media/DhnYoVQX4AUic5G.jpg',
  },
  {
    title: 'Kenlo',
    description: 'Kenlo live session',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-party-flyer-design-template-55f9cc650af0b208928bddf7691b1640_screen.jpg',
  },
  {
    title: 'Creamfields',
    description: 'La jodita tuchi tuchi',
    image: 'https://farm5.static.flickr.com/4131/5047491010_b26a04cfea_b.jpg',
  },
];

const Events: NextPage = () => {
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