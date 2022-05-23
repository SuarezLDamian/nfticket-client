import Image from 'next/image'


const Carousel = () => {
    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" alt="carousel placeholder" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" alt="carousel placeholder" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" alt="carousel placeholder" className="rounded-box" />
            </div> 
            {/* <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <Image src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A" className="rounded-box" />
            </div> */}
        </div>
    )
}

export default Carousel;