import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div className="mt-4">
      <img src={cover} alt={`cover picture of title ${title}`} />
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
        <div>
          <span>{reading_time} min read</span>
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
