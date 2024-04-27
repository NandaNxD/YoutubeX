import React from 'react'

/**
 * 
 * @param {object} arg 
 * @param {string} arg.text
 */
const Button = ({text,selectedButtonIndex,setSelectedButtonIndex,buttonIndex}) => {

  return (
    <div className={`${selectedButtonIndex===buttonIndex?'bg-black text-white':'bg-gray-200 text-black hover:bg-gray-300'} px-4 py-2 rounded-lg cursor-pointer  text-nowrap`} onClick={(e)=>setSelectedButtonIndex(buttonIndex)}>
        {text}
    </div>
  )
}

export default Button;