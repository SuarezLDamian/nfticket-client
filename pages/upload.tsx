import type { NextPage } from 'next'

import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import UploadForm from '../components/upload-form/uploadForm';

import { useAccount } from 'wagmi';

const Upload: NextPage = () => {

    const { data } = useAccount();
    const userAddress = data?.address as string;

    return (
        <>
            <NavBar/>
            {
                userAddress == null || undefined ?
                <>
                    <div className="mt-8 flex justify-center">
                        <h1 className="text-4xl sm:text-6xl">Conectá tu wallet</h1>
                    </div>
                    <div className="my-8 flex justify-center">
                        <p className="text-lg sm:text-2xl">Debés ingresar para crear un evento.</p>
                    </div>
                </>
                :
                <>
                    <div className="mt-8 flex justify-center">
                        <h1 className="text-3xl sm:text-6xl">Contanos sobre el evento</h1>
                    </div>
                    <div className="my-4 flex justify-center">
                        <p className="text-xl sm:text-3xl">Solo necesitamos unos pocos datos.</p>
                    </div>
                    <div className="mt-8 mb-24 flex justify-center">
                        <UploadForm />
                    </div>
                </>
            }                    
            <div className="relative bottom-0">
                <Footer/>
            </div>
        </>
    );
}
  
export default Upload