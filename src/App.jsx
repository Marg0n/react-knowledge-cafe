import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (id, blog) => {
    // console.log(blog.title, id);

    const isExists = bookmarks.find((bm) => bm.id == id);
    if (!isExists) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    } else {
      alert("already exists");
    }
  };

  const handleMarkAsRead = (id, time) => {
    // find if the id is existing in the bookmarked id
    const bookmarked = bookmarks.find((bookmark) => bookmark.id == id);

    if (bookmarked) {
      const remainingBookmark = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      // remove the 'all' read block from bookmark
      setBookmarks(remainingBookmark);
      setReadingTime(readingTime + time);
    } else {
      const newReadingTime = readingTime + time;
      setReadingTime(newReadingTime);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto p-4 gap-4">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
      <Footer />
    </>
  );
}

export default App;
