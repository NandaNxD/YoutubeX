import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './Utils/appSlice';
import { AUTOCOMPLETE_API } from './Utils/constants';
import { addSearchResultsToCache, changeSearchText } from './Utils/searchSlice';

const Header = () => {

  const dispatch=useDispatch();

  const [searchQuery,setSearchQuery]=useState('');

  const [searchResults,setSearchResults]=useState([]);

  const [showSearchResults,setShowSearchResults]=useState(true);

  const cache=useSelector((store)=>{
    return store.search.cache;
  })

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }


  const getSearchSuggestions=async()=>{
    const data=await fetch(AUTOCOMPLETE_API+searchQuery);
    const json=await data.json();

    setSearchResults(json[1]);

    dispatch(addSearchResultsToCache({
      [searchQuery]:json[1],
    }))

    setShowSearchResults(true);
  }

  const handleSearchResultClick=(clickedText)=>{
    dispatch(changeSearchText(clickedText));
  }

  const emptySearchText=()=>{
    setSearchQuery('');
  }


  useEffect(()=>{
    const timer=setTimeout(()=>{

      if(cache[searchQuery]){
        setSearchResults(cache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
     
    },200)

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])


  return (
    <div className="shadow-md grid grid-flow-col px-2 fixed bg-white w-full z-20">

      <div className='flex items-center col-span-1'>
       <img alt='burgerMenu Icon' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'  className='h-9 bg-white hover:scale-105 active:scale-100 transition-all cursor-pointer hidden md:block' onClick={toggleMenuHandler}>
        </img>

        <img alt='Youtube Icon' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' className='h-16 cursor-pointer' onClick={(e)=>{
          window.location.href='/';
        }}>
        </img>
      </div>
    
      <div className='flex flex-col col-span-10 justify-center items-center relative'>

        <div className='flex justify-center w-full'>
          <input className='border border-gray-300 rounded-l-full p-2 px-4 pr-7 w-[50%]' type='text'
            placeholder='Search'
              value={searchQuery}
              onChange={(e)=>{
                setSearchQuery(e.target.value);
                console.log(e.target.value);
              }}

              onFocus={(e)=>{
                setShowSearchResults(true);
              }}

              onBlur={(e)=>{
                setShowSearchResults(false);            
              }}

            ></input>
           
            <button className='border border-gray-300 rounded-r-full p-2 px-5 bg-gray-100 active:bg-gray-100 relative'>
              <img alt='search svg' src='search.svg'></img>
              {
                searchQuery.length? <img src='cross.svg' alt='cross' className='absolute top-2 -left-8'
                  onClick={emptySearchText}
                ></img>:''
              }
              
            </button>
        </div>

        {
          showSearchResults &&
            (
              <div className={`rounded-lg shadow-lg absolute bg-white  top-14 w-[55%] z-10 ${searchResults.length && 'border border-gray-300'}`}>
                <ul>
                  {
                    
                    searchResults.map((resValue,index)=>{
                      return ( <li className='px-2 py-2 hover:bg-gray-100 flex gap-4' key={index} onMouseDown={(e)=>{
                        handleSearchResultClick(resValue);
                      }}> <img alt='search svg' src='search.svg'></img>  {resValue}</li>);
                    })
                  }
                  </ul>
              </div>
            )
        }

      
         
      </div>

      <div className='flex items-center col-span-1 justify-end'>
        <img alt='account-icon' src='avatar.jpg' className='h-16 p-3 rounded-full'>
        </img>
      </div>
      

      
    </div>
  )
}

export default Header
