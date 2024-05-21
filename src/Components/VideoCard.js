import React from 'react'

const VideoCard = ({videoData,showLessText}) => {

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
        <div className={`rounded-lg m-2  hover:brightness-90 cursor-pointer ${showLessText?'flex':''}`}>
            <img alt='video-thumbnail' src={thumbnails.medium.url} className={`rounded-lg  ${showLessText?'w-[50%]':'w-full'} `} ></img>

            <div className={`p-2 ${showLessText?'w-[50%]':''}`}>
                <h2 className={showLessText?'text-ellipsis overflow-hidden text-nowrap font-bold youtube-font':'font-semibold youtube-font text-ellipsis overflow-hidden'}>{title}</h2>

                <h2 className={showLessText?'text-ellipsis overflow-hidden text-nowrap text-base youtube-font':'text-base youtube-font text-ellipsis overflow-hidden'}>{channelTitle}</h2>
                <h2>{viewCountText} views</h2>
            </div>
          
        </div>

    )
}

export default VideoCard