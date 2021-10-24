/* eslint-disable @next/next/no-img-element */
import Masonry from "react-masonry-css";
import { useState } from "react";
import  UseStore  from "../zust/zusfig";
const ImagesLists = ({ posts }) => {
  // const [toggle, setToggle] = useState(false);
  const {toggle , setToggle} = UseStore();
  const [urlLink, setUrlLink] = useState("");
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <div>
        <div className={"center-masonry mx-2 "}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {posts.map((post, i) => {
              return (
                <div
                  key={i}
                  className={toggle ? "filter blur-lg" : ""}
                  onClick={() => {
                    setToggle(true);
                    setUrlLink(post.imageAdress);
                  }}
                >
                  <img src={post.imageAdress} alt="dd" className="rounded-lg	" />
                </div>
              );
            })}
          </Masonry>
          {toggle && (
            <div
              className="fixed bg-black  bg-opacity-60 inset-0 flex justify-center items-center z-80"
              onClick={() => {
                setToggle(false);
              }}
            >
              <div className="relative ">
                <img
                  src={urlLink}
                  alt="yoo"
                  className=" object-contain h-screen p-8 w-full rounded-xl "
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesLists;
