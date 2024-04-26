import React from 'react'
import Section from './Section'

const Sider = () => {

  const siderData=[
    {
      heading:'Home',
      listItems:[]
    },
    {
      heading:'Shorts',
      listItems:[]
    },
    {
      heading:'Videos',
      listItems:[]
    },
    {
      heading:'Live',
      listItems:[]
    },
    {
      heading:'Subscriptions',
      listItems:[
        'Music','Sports','Gaming','Movies'
      ]
    },
    {
      heading:'Watch Later',
      listItems:[
        'Cricket','Courses','News'
      ]
    }
  ]

  return (
    <div className='hidden md:block shadow-lg p-2 md:w-2/12 lg:w-1/12 mb-2 mt-2'>
      {
        siderData.map(data=><Section heading={data.heading} listItems={data.listItems} key={data.heading}/>)
      }

    </div>
  )
}

export default Sider
