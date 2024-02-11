'use client'
import React from 'react'

export default function Gigi() {

  const Teleport = () => {
   window.scrollBy(0 , 2500)

  }

  return (

    <>

    <div className="lighteffects">
      <div className="light1"></div>
      <div className="light2"></div>

    </div>
    
   

    <div className="gigiinfo">

      <div className="maingigi">
        
        <div className="hello">
         <div className="name">Hello Everyoane</div>
         <div className="who">Hello ! I Am    <div className='animatedtext' >   Gigi Beridze</div> </div>
         <div className="desc">You Can Check My Projects Here If You Have Questions Send Message , You Can Check My Skills My Social ACcounts
          And Can See How i Build This Website.
          </div>

          <div className="email">
         
         <div className="inputbox"><div className='emailtext' >beridzegigi19@gmail.com</div> <a onClick={ () => Teleport()}  class="sendbtnforemail bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Send Message
</a>  </div>
<a onClick={ () => Teleport()}  class=" sndbtn sendbtnforemail bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Send Message
</a>


       </div>


        </div>
        
        <div className="photo">
        <div className="gigi"></div>
        

        </div>

        
        
        
        </div>  
       
    
 





    </div> </>
      
  )
}
