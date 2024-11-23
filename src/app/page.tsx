import React from 'react'

const Home = () => {
  return (
    // <div className='grid grid-cols-3 grid-rows-[200px_200px_200px] text-slate-100 gap-3'>
    //     <div className='bg-green-900 col-span-3'>Box1</div>
    //     <div className='bg-purple-900 row-span-3'>Box2</div>
    //     <div className='bg-red-900 col-span-2 row-span-2'>Box3</div>
    // </div>
//  <div className='grid grid-cols-3  grid-rows-[100px_200px_200px_100px] gap-5 bg-black'>
//     <div className='bg-purple-900 text-yellow-50 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white'>Header</div>
//     <div className='bg-green-400 text-yellow-50 row-span-2 text-[36px] font-bold text-center content-center border-2 border-white '>Slidebare</div>
//     <div className='bg-blue-500  text-yellow-50 col-span-2 row-span-1 text-[36px] font-bold text-center content-center border-2 border-white'>Content1</div>
//     <div className='bg-yellow-500 text-yellow-50 text-[36px] font-bold text-center content-center border-2 border-white'>Content2</div>
//     <div className='bg-orange-500 text-yellow-50 text-[36px] font-bold text-center content-center border-2 border-white'>Content3</div>
//     <div className='bg-pink-500 text-yellow-50 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white'>Footer</div>
//  </div>
                    


              // <div className='flex justify-center  items-center gap-3 h-screen relative'>
             
              //   <div className='bg-pink-700 w-80 h-80 '>Box 1</div>
              //   <div className='bg-yellow-500 w-80 h-80'>Box 2</div>
              //   <div className='bg-sky-700  w-80 h-80'>Box 3</div>
              //   <div className='bg-indigo-950  w-80 h-80'>Box 4</div>
              //   <div className='bg-orange-500  w-80 h-80'>Box 1</div>
              //   <div className='bg-yellow-500  w-80 h-80'>Box 2</div>
              //   <div className='bg-sky-700  w-80 h-80'>Box 3</div>
               
              // </div>
   
              
            //   <div className="grid grid-cols- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            //   <div className="bg-yellow-200 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-md">
            //     Item 1
            //   </div>
            //   <div className="bg-red-400 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-md">
            //     Item 2
            //   </div>
            //   <div className="bg-blue-400 p-4 row-span-2 flex items-center justify-center rounded-lg shadow-md">
            //     Item 3
            //   </div>
            //   <div className="bg-pink-400 p-4 col-span-2 flex items-center justify-center rounded-lg shadow-md">
            //     Item 4
            //   </div>
            //   <div className="bg-orange-400 p-4 col-span-2 flex items-center justify-center rounded-lg shadow-md">
            //     Item 5
            //   </div>
            //   <div className="bg-purple-400 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-md">
            //     Item 6
            //   </div>
            // </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {/* Item 1 */}
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 1</span>
            </div>
      
            {/* Item 2 */}
            <div className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 2</span>
            </div>
      
            {/* Item 3 */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-indigo-700 p-4 row-span-2 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 3</span>
            </div>
      
            {/* Item 4 */}
            <div className="bg-gradient-to-r from-teal-500 via-green-600 to-lime-700 p-4 col-span-2 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 4</span>
            </div>
      
            {/* Item 5 */}
            <div className="bg-gradient-to-r from-orange-500 via-red-600 to-yellow-700 p-4 col-span-2 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 5</span>
            </div>
      
            {/* Item 6 */}
            <div className="bg-gradient-to-r from-indigo-600 via-blue-700 to-purple-800 p-4 col-span-3 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-white text-[28px] font-semibold">Item 6</span>
            </div>
          </div>
 
          )
}

export default Home




