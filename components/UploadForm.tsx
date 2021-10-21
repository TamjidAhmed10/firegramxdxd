import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { fireStorage } from "../configuration/fire";

import useStore from "../zust/zusfig";
const UploadForm = () => {
  const { selectedFileName, setSelectedFileName } = useStore();
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    console.log(selectedFileName);
    if (selectedFileName) {
      const storageRef = ref(fireStorage, "images/" + selectedFileName["name"]);
      uploadBytes(storageRef, selectedFileName).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    }
  };
  const handleChange = (e: any) => {
    if (
      (e.target.files[0] && e.target.files[0].type === "image/jpeg") ||
      e.target.files[0].type === "image/png"
    ) {
      setSelectedFileName(e.target.files[0]);
      setError("");
    } else {
      setError("Please select a valid image file jpeg/png");
      setSelectedFileName("");
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleButtonClick}>click</button>
      {selectedFileName && <p>{selectedFileName["name"]}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UploadForm;
