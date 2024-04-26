import React from 'react'

const VideoCard = ({videoData}) => {

    const {title,thumbnails,description,channelTitle}=videoData.snippet;

    const {commentCount,favoriteCount,likeCount,viewCount}=videoData?.statistics || {};

    let viewCountText='';

    if(viewCount>1000 && viewCount<1000000){
        viewCountText=Math.round(viewCount/1000)+'K'
    }
    else if(viewCount>1000000){
        viewCountText=Math.round(viewCount/1000000)+'M'
    }
    
    return (
        <div className='rounded-lg m-2  hover:brightness-90 cursor-pointer'>
            <img alt='video-thumbnail' src={thumbnails.medium.url} className='rounded-lg w-full' ></img>

            <div className='p-2'>
                <h2 className='font-bold'>{title}</h2>

                <h2 className='text-base'>{channelTitle}</h2>
                <h2>{viewCountText} views</h2>
            </div>
          

        </div>

    )
}

export default VideoCard