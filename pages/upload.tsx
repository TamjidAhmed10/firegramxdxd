
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";

const upload = () => {
    return (
      <div>
        <div className="">
          <Navbar />
        </div>

            <UploadForm />
            <div className="absolute bottom-0 left-0 right-0 ">
                <Footer />
            </div>
            
      </div>
    );
}

export default upload
