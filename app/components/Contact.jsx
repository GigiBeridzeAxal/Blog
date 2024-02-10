'use client'

import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
    const [name , setname] = useState()
    const [phone , setphone] = useState()
    const [message , setmessage] = useState()
    const [succ , setsucc] = useState()

   const changename = (e) => {
    setname(e.target.value)
   }
   const changephone = (e) => {
    setphone(e.target.value)
   }
   const changemessage = (e) => {
    setmessage(e.target.value)
   }


      const sendmessage  = async() =>{

          
      

        const sendmen = await axios.post('http://localhost:3500/', {

        name,
        Phone: phone
        ,
        Message: message 
  
        } )
        if(sendmen){
          setsucc("Succ")
        }else{
          setsucc("NotSUcc")
        }
  

      
     
        
  


     
      

     


   }

  return (
    <div className="contact">
      <h1 className='contactittle' >Contact Us</h1>
    {
      succ == "Succ" ? <h1 className='contactittle' >Succesfuly Send Message</h1> : <div></div>
    }
      {
      succ == "NotSUcc" ? <h1 className='contactittle' >Not Succesfully</h1> : <div></div>
    }

   
       <div className="maincontact">
         
         <div className="info">

          <div className="tittle">Send Message</div> 
           <div className="desc">Hello ! If You Have Some Questions Send Message 
           </div>

         </div>
       
       <div className="sendcontact">
        <div className="tittle">Send Message</div>
        
        <div className="inputs">
        <input onChange={(e) => changename(e)} className='mobile' type="text" placeholder='Please Enter Your Name' />
        <input onChange={(e) => changephone(e)} className='Message' type="text" placeholder='Please Enter Your Phone' />
        <input onChange={(e) => changemessage(e)} className='Message' type="text" placeholder='Please Enter Your Message' />



        </div>
     
        



       </div>





       </div>

       <button onClick={() => sendmessage()} id='Contacttag' class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded">
  Send Message
</button>



    </div>
  )
}
