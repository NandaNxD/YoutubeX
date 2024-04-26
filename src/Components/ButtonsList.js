import React from 'react'
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
  return (
    <div className='flex gap-3 px-2 mt-2 mb-2 overflow-y-scroll no-scrollbar'>
        {
            buttonTextList.map((text)=>{
                return <Button text={text} key={text}/>
            })
        }
    </div>
  )
}

export default ButtonsList
