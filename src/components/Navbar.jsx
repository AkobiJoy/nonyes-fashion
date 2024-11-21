import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white shadow-lg shadow-sky-100 px-28 py-5 cursor-pointer fixed z-10 w-full'>
        <ul className='flex items-center gap-x-12 relative'>
              {/* Wrapper div for dropdown */}
            <div className='relative group'>
            <li className='font-semibold text-lg cursor-pointer'>Trendy Glasses</li>   

            {/* dropdown div  */}
            <div className='slide-top absolute hidden group-hover:block bg-white shadow-lg shadow-sky-200 rounded mt-[6.5rem] w-56'>
                <ul className='p-3 flex flex-col gap-2'>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Photochromic Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Bluecut Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Sun Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Driving Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Fashion Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Swimming Glasses</li>
                    <li className='text-lg py-1 px-1 rounded hover:bg-gray-100 cursor-pointer'>Kids Glasses</li>
                </ul>
            </div>     
            </div>

            {/* Other list items */}
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Posts
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            About Me
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Contact Me
          </li>
          <li className="font-medium text-gray-600 text-lg hover:text-black">
            Purchase!
          </li>
        </ul>


        <div className="flex items-center gap-8 text-2xl cursor-pointer">
          <form className="relative w-fit flex items-center z-10" action="">
            <input
              className="text-xl rounded-full p-2 pr-10 w-[250px] border border-neutral-200 focus:outline-none"
              type="text"
              placeholder="Enter search"
              required
            />
            <button type="submit" className="absolute right-2">
              {/* <IoSearchCircleOutline className="text-2xl" /> */}
            </button>
          </form>


          <div className="flex items-center gap-1 border rounded-full">
            <p>
              {/* <IoSunnyOutline className="text-3xl text-yellow-400 font-bold" /> */}
            </p>
            <p>
              {/* <MdModeNight className="text-3xl font-bold" /> */}
            </p>
          </div>
        </div>
    </nav>
  )
}

export default Navbar