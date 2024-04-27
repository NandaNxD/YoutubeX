import React, { useEffect } from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openMenu } from './Utils/appSlice'

const MainContainer = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(openMenu());  
  },[])

  return (
    <div className='w-11/12 md:w-10/12 lg:w-10/12 flex flex-col items-center'>
        <ButtonsList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer
