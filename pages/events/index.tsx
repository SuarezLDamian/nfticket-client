import type { NextPage } from 'next'
import Link from "next/link";

import NavBar from '../../components/navbar/navbar';

const Events: NextPage = () => {
    return (
      <>
        <NavBar/>
        <h1>Próximos eventos</h1>
        <button className="btn btn-primary">
            <Link href="/checkout">
                <a>Comprar</a>
            </Link>
        </button>
      </>
    )
  }
  
  export default Events