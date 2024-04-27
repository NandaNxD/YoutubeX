import React from 'react'
import Section from './Section'
import { MOCK_DATA } from './Utils/MockSiderdata'

const Sider = () => {

  const data=MOCK_DATA

  const imgArray=MOCK_DATA.map((data)=>{
      return data.listItems.map((listItem)=>{
        return listItem.img; 
      }
    )
  }).flat()

  data[2].listItems.forEach((listItem)=>{
    listItem.img=imgArray[Math.floor(Math.random()*(imgArray.length-1))]
  })


  return (
    <div className='hidden md:block shadow-lg p-2 md:w-2/12 lg:w-2/12 fixed bg-white left-0 overflow-scroll h-full pb-10'>
      {
        data.map((data,index)=><Section imgType={data.imgType} sectionHeading={data.sectionHeading} listItems={data.listItems} key={data.sectionHeading} arrayIndex={index}/>)
      }

    </div>
  )
}

export default Sider
