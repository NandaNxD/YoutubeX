import React from 'react'


/**
 * 
 * @param {object} arg
 * @param {string} arg.heading
 * @param {Array<String>} arg.listItems 
 *  
 */
const Section = ({sectionHeading,listItems,imgType,arrayIndex}) => {

  return (
    <div className='m-2'>
      <h1 className={`text-lg cursor-pointer ${listItems.length && 'font-bold'} mb-2 `}>
        {sectionHeading}
      </h1>
        <ul className='text-sm mb-4'>
              {
                  listItems.map((item,index)=>{
                      return (
                          <li key={item.text} className={`cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis flex gap-2 p-2 hover:bg-gray-200 hover:rounded-md items-center ${arrayIndex===0 && index===0 && 'bg-gray-200 rounded-lg'}`}>
                              <img alt='section icon' src={item?.img} className='w-7 h-7 inline mr-1'></img>
                              <span className='text-base'>{item.text}</span>
                          </li>
                      )
                  })
              }

        </ul>

        <hr>
        </hr>
    </div>
  )
}

export default Section