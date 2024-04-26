import React from 'react'

/**
 * 
 * @param {object} arg 
 * @param {string} arg.text
 */
const Button = ({text}) => {
  return (
    <div className='bg-gray-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 text-nowrap'>
        {text}
    </div>
  )
}

export default Button;