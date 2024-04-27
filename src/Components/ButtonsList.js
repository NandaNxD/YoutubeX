import React, { useState } from 'react'
import Button from './Button'

const ButtonsList = () => {
    const buttonTextList=[
        'All',
        'Test Cricket',
        'Music',
        'Gaming',
        'Cricket',
        'Cooking',
        'Soccer',
        'Chess',
        'AI',
        'Engineering',
        'Computer',
        'Laptop',
        'Macintosh',
        'Windows',
        'Daimler',
        'Javascript'
    ]

  const [selectedButtonIndex,setSelectedButtonIndex]=useState(0);

  return (
    <div className='flex gap-3 px-12 w-full  mt-2 mb-2 overflow-y-scroll no-scrollbar bg-white'>
        {
            buttonTextList.map((text,index)=>{
                return <Button text={text} key={text} selectedButtonIndex={selectedButtonIndex} setSelectedButtonIndex={setSelectedButtonIndex} buttonIndex={index}/>
            })
        }
    </div>
  )
}

export default ButtonsList
