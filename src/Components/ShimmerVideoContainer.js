import React from 'react'
import Shimmer from './Shimmer';
import { useSearchParams } from 'react-router-dom';

const ShimmerVideoContainer = () => {

    const [searchParams]=useSearchParams();
    const videoId=searchParams.get('v');


    const loaderCardArray=[]
    for(let i=0;i<12;i++){
        loaderCardArray.push(i);
    }
    

  return (
    <div className={videoId?'flex flex-col w-[30%]':'flex flex-wrap justify-center gap-2 gap-y-4 '}>
    {
      loaderCardArray.map((dummy,index)=>{
        return (
          <div key={index} className={videoId?'':'w-full sm:w-64 md:w-72 lg:w-72 mx-1'}>
            <Shimmer/>
          </div>
        )

      })
    }
    
  </div>
  )
}

export default ShimmerVideoContainer
