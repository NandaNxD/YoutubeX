import React, { useEffect } from 'react'
import MainContainer from './MainContainer'
import Sider from './Sider'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  useEffect(()=>{
    console.log('body')
  },[])

  return (
    <div className='flex justify-center'>
      {
        isMenuOpen && <Sider/>
      }
      <Outlet/>
    </div>
  )
}

export default Body
