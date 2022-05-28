import Image from 'next/image'
import { Children } from 'react';
import Card from '../card/Card';

const Carousel = ({ children }: { children: React.ReactNode | React.ReactNode[]; }) => {
    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                { children }
            </div>
        </div>
    )
}

export default Carousel;