import type { NextPage } from 'next';

import NavBar from '../components/navbar/navbar';
import Steps from '../components/steps/steps';
import Carousel from '../components/carousel/carousel';
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
        <div className="m-8 flex justify-center">
            <h1 className='text-6xl'>Próximos eventos</h1>
        </div>
        <div className="m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">        
            {
              events.map((event, index) => (   
                <div key={index} className='flex justify-center'>             
                  <Card key={index} description={event.description} title={event.title} image={event.image} />
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