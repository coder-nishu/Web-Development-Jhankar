import React from 'react'
import { useLoaderData } from 'react-router'
import Post from '../Post/Post'
export default function Posts() {
    const posts = useLoaderData()
  return (
    <div>
        Here is {posts.length} posts
        {
            posts.map((post) => <Post key={post.id} post = {post}/>)
        }
    </div>
  )
}
