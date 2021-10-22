import { useState } from "react";
import ImagesLists from "../components/ImagesLists";

import UploadForm from "../components/UploadForm";
import getAllThePosts from "../functions/getAllThePost";
const Home = ({posts}) => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <UploadForm />
        <ImagesLists posts={posts}/>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const posts = await getAllThePosts();
  return {
    props: { posts }, 
  };
}


export default Home;
