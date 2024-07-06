import React, { useEffect } from 'react'

const Posts = ({posts}) => {
  useEffect(()=>{
    console.log("POSTS", posts)
  },[posts])
  return (
    <div>
      {posts.map((post, index) => (
        <div key = {index}>
          Hello
        </div>
      ))}
    </div>
  )
}

export default Posts
