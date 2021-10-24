
import Footer from "../components/Footer";
import ImagesLists from "../components/ImagesLists";
import Navbar from "../components/Navbar";
import getAllThePosts from "../functions/getAllThePost";
const Home = ({posts}) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        
        <ImagesLists posts={posts} />
      </div>
      <Footer/>
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
