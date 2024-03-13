import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  
  
  console.log(bookmarks.map(bookmark => bookmark.title));
  
        
  return (
    <div className="md:w-1/3 rounded-xl my-4 p-4">
      <h2 className='text-xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(
          (bookmark, idx) => 
          <Bookmark 
          key={idx} 
          bookmark={bookmark}>          
          </Bookmark>
        )
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
}

export default Bookmarks;
