import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'
export default function Blogs({handleBookMark,handleMArkAsRead}) {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs)

    return (
        <div>
            <h1 className='text-3xl'>total: {blogs.length}</h1>
            <div className="all-blogs-container grid grid-cols-2">
                {
                    blogs.map((blog)=><Blog handleBookMark={handleBookMark} handleMArkAsRead={handleMArkAsRead} blog={blog}></Blog>)
                }
            </div>
        </div>
    )
}
