import React, { useDebugValue, useEffect, useState } from 'react'
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from './Utils/constants.js';
import VideoCard from './VideoCard.js';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShimmerVideoContainer from './ShimmerVideoContainer.js';
import { storeVideos } from './Utils/appSlice.js';

const VideoContainer = () => {
  const [searchParams]=useSearchParams();
  const videoId=searchParams.get('v');

  const [videos,setVideos]=useState([]);

  const [loader,setLoader]=useState(true);
 
  const dispatch=useDispatch();

  const searchText=useSelector((store)=>store.search.searchText)

  useEffect(()=>{
    if(searchText.length){
      getVideos(searchText);
    }
    else{
      getVideos('');  
    }
   
  },[searchText])

  const shuffleArray=(array)=> {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

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

    if(videoId)
    shuffleArray(json.items)
  
    setVideos(json.items);

  }
  console.log(loader)

  if(loader){
    return (<ShimmerVideoContainer/>);
  }


  return (
    <div className={!videoId?'flex flex-wrap justify-center':'flex flex-col w-[30%]'}>
      {
        videos.map((videoData)=>{
          return (
            <Link to={'/watch?v='+videoData.id} key={videoData.id} className={!videoId?`w-full sm:w-64 md:w-72 lg:w-72 mx-1`:'w-full mx-1'}>
              <VideoCard videoData={videoData} showLessText={videoId?true:false}/>
            </Link>
          )

        })
      }
    
    </div>
  )
}

export default VideoContainer
