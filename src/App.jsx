import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-4 p-4">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
