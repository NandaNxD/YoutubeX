import React from 'react'
import Shimmer from './Shimmer';

const ShimmerVideoContainer = () => {
    const loaderCardArray=[]
    for(let i=0;i<12;i++){
        loaderCardArray.push(i);
    }
    

  return (
    <div className='flex flex-wrap justify-center gap-2 gap-y-4 '>
    {
      loaderCardArray.map((dummy,index)=>{
        return (
          <div key={index} className='w-full sm:w-64 md:w-72 lg:w-72 mx-1'>
            <Shimmer/>
          </div>
        )

      })
    }
    
  </div>
  )
}

export default ShimmerVideoContainer
