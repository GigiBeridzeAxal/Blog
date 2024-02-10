

import Image from 'next/image'
import Dashoard from './components/Dashoard'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/contact'
import Gigi from './components/Gigi'


export default function Home() {
  return (
    <>
   <Gigi></Gigi>
    <Dashoard></Dashoard>

    <About></About> 
  
  <Contact></Contact>

    </>
  )
}
