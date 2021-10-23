import Masonry from "react-masonry-css";


const ImagesLists = ({ posts }) => {
  
  const images = posts.map((post) => post.imageAdress);
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <div>
        <div className="center-masonry">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, i) => {
              return (
                <div key={i} >
                  <img
                    src={post.imageAdress}
                    alt="dd"
                  />
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default ImagesLists;
