import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from './Utils/constants'
import { useSearchParams } from 'react-router-dom';

const CommentsContainer = () => {

  const [searchParams]=useSearchParams();
  const videoId=searchParams.get('v');

  const [commentsList,setCommentsList]=useState([])

  console.log('hafd')

  useEffect(()=>{
    getComments();
  },[]);

  const getComments=async()=>{
    const data=await fetch(COMMENTS_API+videoId)
    const json=await data.json();

    console.log(json);

    setCommentsList(json.items.map((item)=>{
      //const [authorDisplayName,authorProfileImageUrl,textDisplay,publishedAt]= item.snippet.topLevelComment.snippet;

      return item.snippet.topLevelComment.snippet

    }))

    

  }

  return (
    <div className='m-2 p-2'>
        <span className='block font-bold text-base'>Comments</span>

        {
          commentsList.map((comment)=>{
            return <div>
              {comment.textDisplay}
            </div>
          })
        }

    </div>
  )
}

export default CommentsContainer;
