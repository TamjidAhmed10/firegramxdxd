import { useState } from "react";

import UploadForm from "../components/UploadForm";
const Home = () => {
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <UploadForm
          setFileName={(fileName) => {
            setFileName(fileName);
          }}
          fileName={fileName}
        />
      </div>
    </div>
  );
};

export default Home;
