import React from 'react'


/**
 * 
 * @param {object} arg
 * @param {string} arg.heading
 * @param {Array<String>} arg.listItems 
 *  
 */
const Section = ({heading,listItems}) => {
  return (
    <div className='m-2'>
    <h1 className={`text-base cursor-pointer ${listItems.length && 'font-bold'}`}>{heading}</h1>
      <ul className='text-sm'>
            {
                listItems.map((item)=>{
                    return (
                        <li key={item} className='cursor-pointer'>
                            {item}
                        </li>
                    )
                })
            }

      </ul>
    </div>
  )
}

export default Section