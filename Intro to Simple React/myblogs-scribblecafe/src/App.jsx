import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import "./App.css";
import { useState } from "react";

function App() {
  const [bookMarkedBlog, setBookMarkBlog] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    if (!bookMarkedBlog.includes(blog)) {
      setBookMarkBlog([...bookMarkedBlog, blog]);
    }
  };
  const handleMArkAsRead = (time, id) => {
    const newReadingtime = readingCount + time;
    setReadingCount(newReadingtime);
    const newBookMarkedBlog = bookMarkedBlog.filter((blog) => blog.id !== id);
    setBookMarkBlog(newBookMarkedBlog);
  };
  console.log(bookMarkedBlog);
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex gap-7 text-center">
        <div className="left-container w-[70%] border-2 border-black">
          <Blogs
            handleBookMark={handleBookMark}
            handleMArkAsRead={handleMArkAsRead}
          ></Blogs>
        </div>
        <div className="right-container border-2 w-[30%] border-black">
          <h2>Read time: {readingCount}</h2>
          <h2>BookMark: {bookMarkedBlog.length}</h2>
          {bookMarkedBlog.map((blog) => (
            <p className="m-4 border-1">{blog.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
