import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeMenu, toggleMenu } from './Utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    const videoId=searchParams.get('v');

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])


  return (
    <div className='p-6'>
        <iframe 
        width="1260" 
        height="600" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>

        <CommentsContainer/>
    </div>
  )
}

export default WatchPage