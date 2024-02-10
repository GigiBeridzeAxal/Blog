'use client'
import React, { useState } from 'react'

export default function Dashoard() {
   const [dashboardtype, setdashboardtype ] = useState('Webs')
   
  const dashchange = () => {
  setdashboardtype("Webs")
  

  }
  const Freechange = () => {
    setdashboardtype("Freelancer")
    
  
    }
    const Skillchange =    () => {
        setdashboardtype("Skills")
        
      
        }


  return (
   <>

<div class="bg-gray-900 min-h-screen flex items-center justify-center">
  <div class="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">

    <div class="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
      <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        
        {
            dashboardtype == "Webs" ?      <a class=" cursor-pointer bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a> :      <a onClick={() => dashchange()} class=" cursor-pointer text-white/50 p-4 inline-flex justify-center rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        }
   
   {
      dashboardtype == "Freelancer" ?  <a class=" cursor-pointer bg-gray-800 text-white p-4 inline-flex justify-center rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    </a>  :  <a onClick={() => Freechange()} class=" cursor-pointer text-white/50 p-4 inline-flex justify-center rounded-md" >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </a>
   }
          
   
        {
            dashboardtype == "Skills" ?   <a class="text-white bg-gray-800 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </a> : <a onClick={() => Skillchange()} class=" cursor-pointer text-white/50  p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" >
            <svg xmlns="http://www.w3.org/2000/svg" class="  h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </a>
        }
      
      </nav>
      <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
       
      
      </div>
    </div>
   <div class="flex-1 px-2 sm:px-0">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-extralight text-white/50">Projects</h3>
        <div class="inline-flex items-center space-x-2">

         
         
        </div>
      </div>
 {
    dashboardtype == "Webs" ?      <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
   
    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" giaca w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Gi-Academy</h4>
      <p class="text-white/50">Learning Website</p>
      <a href="https://gi-academy.vercel.app/"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Visit
</button></a>
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" giaca w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Crud Fullstack </h4>
      <p class="text-white/50">Crud Fullstack App</p>
      <a href="https://crudfullstackapp.vercel.app/"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Visit
</button></a>
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

  </div>
  

  
  
  : <div></div>
 }
 {
    dashboardtype == "Freelancer" ?      <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
   
    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" gifrelan w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Gigi Beridze</h4>
      <p class="text-white/50">Freelancer</p>
      <a href="https://www.freelancer.com/u/beridzegigi19"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Visit
</button></a>
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
  </div> : <div></div>
 }
 {
    dashboardtype == "Skills" ?      <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
   
    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" relogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">React</h4>
      <p class="  frontend bg-white p-2 text-black/100">Front-End Development</p>
     
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

   


    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" nelogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Next.js</h4>
      <p class= " frontend bg-white p-2 text-black/100">Back-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
    


    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" talogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">TailwindCss</h4>
      <p class= " frontend bg-white p-2 text-black/100">Front-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" htlogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Html</h4>
      <p class= " frontend bg-white p-2 text-black/100">Front-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>


    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" csslogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Css</h4>
      <p class= " frontend bg-white p-2 text-black/100">Front-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" jalogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Javascript</h4>
      <p class= " frontend bg-white p-2 text-black/100">Back-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" jalogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Node.js</h4>
      <p class= " frontend bg-white p-2 text-black/100">Back-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" jalogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Express.js</h4>
      <p class= " frontend bg-white p-2 text-black/100">Back-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>

    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
      <div class=" frlogo w-20 h-20 object-cover object-center rounded-full"  alt="cuisine" /> 
      <h4 class="text-white text-2xl font-bold capitalize text-center">Framer-Motion</h4>
      <p class= " frontend bg-white p-2 text-black/100">Front-End Development</p>
  
      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">Fulltime <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
    </div>
    
    
  </div> 
          : <div></div>
 }
    </div>
  </div>
</div>
   
   
   
   
   </>
  )
}
