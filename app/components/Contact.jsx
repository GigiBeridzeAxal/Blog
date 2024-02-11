'use client'

import axios from 'axios'
import React, { useState } from 'react'

export default  function Contact() {
    const [name , setname] = useState()
    const [phone , setphone] = useState()
    const [message , setmessage] = useState()
    const [succ , setsucc] = useState("SD")
    const [analyzer , setanalyzer] = useState("SD")

   const changename = (e) => {
    setname(e.target.value)
   }
   const changephone = (e) => {
    setphone(e.target.value)
   }
   const changemessage = (e) => {
    setmessage(e.target.value)
   }

   const Analyze = () => {
   setTimeout(() => {
        setsucc(analyzer)
   }, 1000);

       
   

   }

   const senddata = async() => {
 try{
        const sendmess = await axios.post('https://blogbackend-kd6p.onrender.com', { name, Phone: phone, Message: message })
        .then(setanalyzer('Succ'),  setanalyzer("Succ") ,  Analyze() )
      }catch{
        setanalyzer("NotSucc")
      setTimeout(() => {
        setanalyzer("NotSucc")
        Analyze()
        console.log("Its Catch")   
      }, 1500);
     
      }
       
    
    

   }

     
    


  

  return (
    <div className="contact">
      <h1 className='contactittle' >Contact Us</h1>
    {
 
        succ == "Succ" ?<div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div>
            <p class="font-bold">You Succesfuly Send Message</p>
            <p class="text-sm">Thanks For Message</p>
          </div>
        </div>
      </div> : <div></div>
    
   
    }
      {
    
          succ == "NotSucc" ? <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p class="font-bold">All Fields Are Mandatory</p>
          <p>Something not ideal might be happening.</p>
        </div>
        : <div></div>
  
     
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

       <button onClick={() => senddata()} id='Contacttag' class=" ctnbtn bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-400 rounded">
  Send Message
</button>



    </div>
  )
}
