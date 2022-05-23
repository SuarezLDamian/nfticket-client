import type { NextPage } from 'next'
import Head from 'next/head'

import NavBar from '../components/navbar/navbar';
import Carousel from '../components/carousel/carousel';
import Hero from '../components/hero/hero';
import Footer from '../components/footer/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFTicket | Entradas</title>
        <meta name="NFTicket" content="Buy tickets for events with cryptocurrency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <NavBar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default Home
