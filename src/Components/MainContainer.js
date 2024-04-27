import React, { useEffect } from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu } from './Utils/appSlice'

const MainContainer = () => {
  const dispatch=useDispatch();

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  console.log(isMenuOpen);

  useEffect(()=>{
    dispatch(openMenu());  
  },[])

  return (
    <div className={isMenuOpen?`w-11/12 md:w-10/12 lg:w-10/12 flex flex-col items-center`:`w-full flex flex-col items-center`}>
        <ButtonsList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer
