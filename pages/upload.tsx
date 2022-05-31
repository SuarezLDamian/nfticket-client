import type { NextPage } from 'next'

import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import UploadForm from '../components/upload-form/uploadForm';

const Upload: NextPage = () => {
    return (
        <>
          <NavBar/>
          <div className="pt-8 flex justify-center">
              <h1 className='text-4xl'>Contanos sobre el evento</h1>
            </div>
            <div className="p-8 flex justify-center">
                <p className="text-xl">Solo necesitamos unos pocos datos.</p>
            </div>
            <div className="mb-24 flex justify-center">
                <UploadForm />
            </div>            
            <div className="relative bottom-0">
                <Footer/>
            </div>
        </>
    );
}
  
export default Upload