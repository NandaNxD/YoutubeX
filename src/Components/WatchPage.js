import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeMenu, toggleMenu } from './Utils/appSlice';
import CommentsContainer from './CommentsContainer';
import VideoContainer from './VideoContainer';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    const videoId=searchParams.get('v');

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])


  return (
    <div className='p-6 w-full flex gap-4'>
      <div className='w-[70%]'>

        <iframe 
          className='w-full md:w-full h-[70vh] rounded-lg'
          src={`https://www.youtube.com/embed/${videoId}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>

          <CommentsContainer/>

      </div>
      <VideoContainer>

      </VideoContainer>
        
    </div>
  )
}

export default WatchPage