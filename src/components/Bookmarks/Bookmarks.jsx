import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks.map((bookmark) => bookmark.title));

  return (
    <div className="md:w-1/3">
      <div className="my-4 p-4 bg-rose-100 rounded-xl text-gray-800">
        <h2 className="text-xl text-center font-bold">
          Total Reading Time: {readingTime} Mins
        </h2>
      </div>
      <div className="my-4 p-4 bg-slate-700 rounded-xl text-slate-200">
        <h2 className="text-xl text-center font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
