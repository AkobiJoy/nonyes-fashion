"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Toggle dropdown visibility
  const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
 };

  const [isExpanded, setIsExpanded] = useState (false);
    // Sample long text
  const content = 'Photochromic glasses, also known as transition glasses, are a great option for eye care. They automatically adjust to changing light conditions, providing comfort and protection for your eyes. Heres how they work:  In low light, the lenses are clearIn medium light, they become tinted In bright light, they become darkly tinted This means you don not need to switch between prescription glasses and sunglasses. Photochromic glasses are convenient, versatile, and protective. They:- Reduce eye strain- Block UV rays- Adjust to changing light conditions '
   // Set the character limit for the preview
   const previewLimit = 70;
     // Toggle function to expand/collapse text
     const toggleExpand = ()=> setIsExpanded(!isExpanded);
  return (
    <section className='px-20 py-28'>
        <div className='mb-12'>
      <h1 className='text-5xl font-semibold'>Welcome to {"Nonye's"} Fashion blog site🔸</h1>
      </div> 

        <div className='scale-in-ver-bottom grid grid-cols-3 gap-10'>

        <div className='mr-10'>
      <Image
       src="/OYSL1588.JPG"
       alt="picture" 
       width={700} 
       height={300} 
      //  style={{ width: "500px", height: "640px", objectFit: "cover" }}
       className="shadow-lg shadow-sky-200  rounded-lg"
      />
     
      </div>

   <div className=" ">
      <video width="500" height=""
        src="/LIZV9243.MP4" 
        autoPlay
        loop 
        muted 
        playsInline
        // controls
        style={{ width: "500px", height: "640px", objectFit: "cover" }}
        className=" rounded-lg shadow-sky-200 shadow-lg"
      >
      </video>

      
      {/* <video width="500" height="100" controls preload="auto">
      <source src="/LIZV9243.MP4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        // kind="subtitles"
        // srcLang="en"
        // label="English"
      />
      Your browser does not support the video tag.
    </video> */}
      </div>

        <div>
      <Image
       src="/IMG_2929.JPG"
       alt="picture" 
       width={700} 
       height={300} 
       style={{ width: "500px", height: "640px", objectFit: "cover" }}
       className="shadow-lg shadow-sky-200  rounded-lg"
      />
      </div>
      </div>

      <div className='mt-14'>
      <h2 className="text-2xl font-semibold mb-2">2in1 Photochromic Glasses 👓</h2>
       {/* Display either the preview text or the full text */}
       <p className='text-gray-700'>
        {isExpanded ? content : `${content.substring(0,previewLimit)}...`}
       </p>

          {/* Button to toggle extra content */}
          <button onClick={toggleExpand} className="mt-4 text-blue-500 font-semibold underline hover:text-blue-700 focus:outline-none"
      >
        {isExpanded ? "Show less " : "continue ...."}

          </button>
      </div>

      <div className='fixed bottom-10 right-10'>
      <button >
      <Image  onClick={toggleDropdown}
       src="/nf.png"
       alt="picture" 
       width={300} 
       height={300} 
       className="shadow-md shadow-sky-200 h-[75px] w-[80px] rounded-full bg-sky-200"
      />
      </button>

       {/* Dropdown menu (above button) */}
       {isDropdownOpen && (
        <div className='slide-top absolute bottom-0 right-0 bg-white shadow-sky-100 shadow-lg rounded-lg py-3 w-44'>
          <ul className='text-gray-700'>
            <Link href={'/register'}>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Register
            </li>
            </Link>

            <Link href={'/login'}>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Login
            </li>
            </Link>
            <li
              onClick={() => setIsDropdownOpen(false)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              Logout
            </li>
          </ul>
        </div>
      )}
      </div>

      
  
    </section>
  )
}

export default Home