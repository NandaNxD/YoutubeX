import React, { useEffect, useState } from 'react'
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from './Utils/constants.js';
import VideoCard from './VideoCard.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer.js';
import ShimmerVideoContainer from './ShimmerVideoContainer.js';

const VideoContainer = () => {

  const [videos,setVideos]=useState([]);

  const [loader,setLoader]=useState(true);
 

  const searchText=useSelector((store)=>store.search.searchText)

  useEffect(()=>{
    if(searchText.length){
      getVideos(searchText);
    }
    else{
      getVideos('');  
    }
   
  },[searchText])



  const getVideos=async(searchText)=>{
    let data;
    if(!searchText){
      data=await fetch(YOUTUBE_API);
    }
    else{
      data=await fetch(YOUTUBE_SEARCH_API+searchText);
    }
   
  
    const json=await data.json();

    json.items.splice(json.items.length-2,2);

    setLoader(false);

   
  
    setVideos(json.items);
  }
  console.log(loader)

  if(loader){
    return (<ShimmerVideoContainer/>);
  }


  return (
    <div className='flex flex-wrap justify-center'>
      {
        videos.map((videoData)=>{
          return (
            <Link to={'/watch?v='+videoData.id} key={videoData.id} className='w-full sm:w-64 md:w-72 lg:w-72 mx-1'>
              <VideoCard videoData={videoData}/>
            </Link>
          )

        })
      }
    
    </div>
  )
}

export default VideoContainer
