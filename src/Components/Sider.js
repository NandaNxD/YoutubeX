import React from 'react'
import Section from './Section'
import { MOCK_DATA } from './Utils/MockSiderdata'

const Sider = () => {

  const data=MOCK_DATA

  return (
    <div className='hidden md:block shadow-lg p-2 md:w-2/12 lg:w-2/12'>
      {
        data.map((data,index)=><Section imgType={data.imgType} sectionHeading={data.sectionHeading} listItems={data.listItems} key={data.sectionHeading} arrayIndex={index}/>)
      }

    </div>
  )
}

export default Sider
