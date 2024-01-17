import { Analytics } from '@vercel/analytics/react';

import Image from 'next/image'
import Dashoard from './components/Dashoard'
import Header from './components/Header'
import About from './components/About'
import Sponsor from './components/Sponsor'

export default function Home() {
  return (
    <>

    <Dashoard></Dashoard>

    <About></About> 

        <Sponsor></Sponsor>
    </>
  )
}
