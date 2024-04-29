import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from './Utils/constants'
import { useSearchParams } from 'react-router-dom';

const CommentsContainer = () => {

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const [commentsList, setCommentsList] = useState([])

  console.log('hafd')

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId)
    const json = await data.json();

    console.log(json);

    setCommentsList(json.items.map((item) => {
      //const [authorDisplayName,authorProfileImageUrl,textDisplay,publishedAt]= item.snippet.topLevelComment.snippet;

      return item.snippet.topLevelComment.snippet

    }))



  }

  return (
    <div className='m-2 p-2'>
      <span className='block font-bold text-xl mb-3'>Comments</span>

      {
        commentsList.map((comment) => {
          return <div className='p-2 flex gap-2 text-sm'>
            <img src={comment.authorProfileImageUrl} alt='avatar comment img' className='w-8 h-8 rounded-full'>
            </img>
            <div className='flex flex-col'>
              <span className='font-semibold'>{comment.authorDisplayName}</span>
              <span> {comment.textOriginal}</span>
              <div className='flex gap-2 py-2 items-center'>

                <div className='flex items-center'>
                  <img src={'like.svg'} alt='like img' className='hover:rounded-full hover:bg-gray-300 p-2'>
                  </img>
                  <span className='text-sm'>
                  {comment.likeCount}
                  </span>
                  
                </div>
                

                <img src={'dislike.svg'} alt='dislike img' className='hover:rounded-full hover:bg-gray-300 p-2'>
                </img>

                <button className='hover:rounded-2xl hover:bg-gray-300 p-2'>
                  Reply
                </button>
              </div>
            </div>



          </div>
        })
      }

    </div>
  )
}

export default CommentsContainer;
