import type { NextPage } from 'next'
import Link from "next/link";
import Card from '../../components/card/Card';

import NavBar from '../../components/navbar/navbar';

const Events: NextPage = () => {
    return (
      <>
        <NavBar/>
        <h1>Próximos eventos</h1>
        <Card/>
      </>
    )
  }
  
  export default Events