import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="my-10">
      <img
        className="w-full h-96 rounded-xl"
        src={cover}
        alt={`cover picture of title ${title}`}
      />
      <div className="flex justify-between my-4">
        <div className="flex gap-4">
          <img
            className="w-14 h-14 rounded-full"
            src={author_img}
            alt={`image of ${author}`}
          />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmark(blog)}>
            <BsBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="my-2">
        {hashtags.map((hashtag, idx) => (
          <span key={idx} className="mx-2">
            <a href="" />#{hashtag}
          </span>
        ))}
      </p>
      <button 
      className="text-purple-400 underline underline-offset-3"
      onClick={() => handleMarkAsRead(reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
